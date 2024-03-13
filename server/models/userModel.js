import mongoose from "mongoose";

const { Schema, model } = mongoose;

const userSchema = new Schema(
    {
        email : {
            type : String,
            required : [true, "Please add the email address."],
            unique : [true, "User already exists."]
        },
        country : {
            type : String
        },
        firstname : {
            type : String
        },
        lastname : {
            type : String
        },
        pincode : {
            type : String
        },
        address : {
            type : String
        },
        password : {
            type : String
        },
        dob : {
            type : Date
        },
        verified : {
            type : Boolean,
            default : false
        },
        bag : [
            {
                imgLink : {
                    type : String,
                    default : ''
                },
                name : {
                    type : String,
                    default : ''
                },
                type : {
                    type : String,
                    default : ''
                },
                userSize : {
                    type : String,
                    default : ''
                },
                price : {
                    type : String,
                    default : ''
                },
            }
        ],
        favourite : [
            {
                imgLink : {
                    type : String,
                    default : ''
                },
                name : {
                    type : String,
                    default : ''
                },
                type : {
                    type : String,
                    default : ''
                },
                userSize : {
                    type : String,
                    default : ''
                },
                price : {
                    type : String,
                    default : ''
                },
            }
        ]
    },
    {
      timestamps: true,
    }
);

export default model("UserDetails", userSchema);