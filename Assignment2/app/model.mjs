import mongoose from 'mongoose';

mongoose.connect(
    "mongodb://localhost:27017/model",
    { useNewUrlParser: true }
);

const db = mongoose.connection;

db.once("open", () => {
    console.log("Successfully connected to MongoDB using Mongoose!");
});

mongoose.set('useCreateIndex', true);

const userSchema = mongoose.Schema({
    name: { type: String, required: true },
    age: { type: Number, required: true },
    email: { type: String, required: true },
    phoneNumber: { type: Number, required: false },
});

const User = mongoose.model("User", userSchema);

const createUser = async (name, age, email, phoneNumber) => {
    const user = new User({ name: name, age: age, email: email, phoneNumber: phoneNumber });
    return user.save();
}

const findUser = async (filter, projection, limit) => {
    const query = User.find({ $and: filter })
        .select(projection)
        .limit(limit)
    return query.exec();
}

const replaceUser = async (document) => {
    let id = document._id
    delete document._id
    const result = await User.findOneAndUpdate({ _id: id },
        { $set: document }, { useFindAndModify: false });
    // console.log(result)
    return result;
}

const deleteByParams = async (params) => {
    const result = await User.deleteMany(params);
    return result.deletedCount;
}

export { createUser, findUser, replaceUser, deleteByParams }