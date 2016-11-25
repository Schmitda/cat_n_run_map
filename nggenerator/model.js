module.exports = function () {
    return {
        Character: [
            {
                name: {
                    type: String,
                    required: true
                },
                width:{
                    type: Number,
                    required: true,
                },
                height: {
                    type: Number,
                    required: true
                },
                walkAnimation: [
                    {
                        type: String,
                    }
                ],
                jumpAnimation: [
                    {
                        type: String
                    }
                ],
                hurtAnimation: [
                    {
                        type: String
                    }
                ],
                dieAnimation: [
                    {
                        type: String
                    }
                ],
                runAnimation: [
                    {
                        type: String
                    }
                ],
                standAnimation: [
                    {
                        type: String
                    }
                ],
                shootAnimation:[
                    {
                        type: String
                    }
                ],
                canShoot: {
                    type: Boolean,
                    default: false
                },
                defaultSpeed:{
                    type: Number,
                    default: 1
                },
                defaultHealth:{
                    type: Number,
                    default: 1
                },
            }
        ]
    }
  /*      Device: [
            {
                deviceName: {
                    type: String,
                    required: true,
                    unique: true,
                    select: false
                },
                createdAt: {
                    type: Date,
                    required: false,
                    default: Date.now
                },
                test: [
                    {
                        createdBy: {
                            type: "mongoose.Schema.Types.ObjectId",
                            angularType: String,
                            ref: 'User',
                            required: true
                        },
                        title: {
                            type: String,
                            required: true
                        },
                        body: {
                            type: String,
                        }
                    }
                ],
                comments: [
                    {
                        createdBy: {
                            type: "mongoose.Schema.Types.ObjectId",
                            angularType: String,
                            ref: 'User',
                            required: true
                        },
                        title: {
                            type: String,
                            required: true
                        },
                        body: {
                            type: String,
                        }
                    }
                ],
                myFunction: function () {
                    deviceSchema.pre('save', function (next) {
                        if (this.isNew) {
                            this.color = '#' + Math.floor(Math.random() * 16777215).toString(16);
                        }
                        next()
                    });
                }
            },
        ],
        User: [
            {
                firstname: {
                    type: String
                },
                lastname: String,
                myFunction: function () {
                    userSchema.pre('save', function (next) {
                        if (this.isNew) {
                            this.color = '#' + Math.floor(Math.random() * 16777215).toString(16);
                        }
                        next()
                    });
                }
            }
        ]
    }*/
}();