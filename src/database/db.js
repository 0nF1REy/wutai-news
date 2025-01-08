import mongoose from "mongoose";

const connectDatabase = () => {
    console.log("Wait connecting to the database...");

    mongoose
        .connect("mongodb+srv://alan:wPKxpdGnm3dPxqDp@cluster-wutai.5nmmu.mongodb.net/?retryWrites=true&w=majority&appName=cluster-wutai")

        .then(() => console.log("MongoDB Atlas Connected"))
        .catch((error) => console.log(error));
};

export default connectDatabase;