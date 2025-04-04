import JWT from "jsonwebtoken";
// Middleware function to authenticate user requests
    // This function checks if the request has a valid JWT token in the Authorization header.
    // If the token is valid, it extracts the user ID from the token and attaches it to the request object.
    // If the token is invalid or missing, it sends a 401 Unauthorized response.

const authMiddleware = async (req, res, next) => { 
    //next: function to call the next middleware in the stack
    //req: request object containing the HTTP request data  
    //res: response object containing the HTTP response data

    const authHeader = req?.headers?.authorization;//get the authorization header from the request
    //req?.headers?.authorization: optional chaining to avoid errors if headers or authorization is undefined

    if (!authHeader || !authHeader?.startsWith("Bearer")) {
        // If the authorization header is missing or does not start with "Bearer", send a 401 Unauthorized response
        return res.status(401).json({ status: "auth_failed", message: "Authentication Failed" });
    }
    
    const token = authHeader?.split(" ")[1]; //split the header to get the token
    //authHeader?.split(" ")[1]: optional chaining to avoid errors if authHeader is undefined

    
    try {
        const userToken = JWT.verify(token, process.env.JWT_SECRET);

        req.body.user = {//attach the user ID to the request body
            userId: userToken.userId,
        };
        next();//next() is a function that moves execution to the next middleware or route handler.

    } catch (error) {
        console.log(error);
        return res.status(401).json({ status: "auth_failed", message: "Authentication failed" });
    }
};

export default authMiddleware;