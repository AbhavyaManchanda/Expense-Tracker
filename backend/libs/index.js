import bcrypt from "bcrypt";
import JWT from "jsonwebtoken";

export const hashPassword = async (userValue) => {
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(userValue, salt)
    
    return hashedPassword;
};

export const comparePassword = async (userPassword, password) => {
    try {const isMatch= await bcrypt.compare(userPassword,password)
        return isMatch;
    } catch (error) {
        console.log(error);
    }
}

export const createJWT = (id) => {
    return JWT.sign(
        {
            userId: id,
        },
        process.env.JWT_SECRET,
        {
            expiresIn: "1d"
        }
    );
};

export const getMonthName = (monthNumber) => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  // Support both 0-indexed and 1-indexed months
  const index = monthNumber - 1 >= 0 ? monthNumber - 1 : monthNumber;

  if (index < 0 || index > 11) return "Invalid month";

  return months[index];
};