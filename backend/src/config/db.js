import mongoose from 'mongoose'

export const connectDB = async () => {
    try{
        await mongoose.connect(process.env.MONGODB_CONNECTION_STRING);

        console.log("lien ket co so du lieu thanh cong");
    }catch(error){
        console.error("loi khi ket noi co so du lieu: ", error);
        process.exit(1);
    }
}