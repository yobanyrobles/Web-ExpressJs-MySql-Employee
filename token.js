import jwt from 'jsonwebtoken';

const secret_key = "dHnTWs42NP4JCTz3";

// Crea el token para acceder a los endpoint
function Tstore(object) {
    return jwt.sign(object, secret_key, { expiresIn: "1h" });
}

// Verifica que el token es valido
function Tverify(token) {
    try {
        return jwt.verify(token, secret_key);
    } catch {
        return null;
    }
}

// Verifica que puede acceder a la ruta
function Tmiddleware(req, res, next) {
	if (typeof(req.header("token")) == "undefined") {
		return res.status(400).json({message: "missing token"});
	} else if (req.header("token") == "") {
		return res.status(400).json({message: "empty token"});
	} else {
        try {
            // Retorna el object guardado en el Tstore y lo agrega a request para utilizar los campos id, role, etc.
            req.object = jwt.verify(req.header("token"), secret_key);
            next();
        } catch (err) {
            return res.status(401).json({message: "invalid token"});
        }
    }
}

export { Tstore, Tverify, Tmiddleware }