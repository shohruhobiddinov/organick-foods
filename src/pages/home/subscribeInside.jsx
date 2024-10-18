import React, { useState } from 'react';
import { FaCircleArrowRight } from "react-icons/fa6";
import { Button, Input, message } from "antd";
import { MdOutlineMailOutline } from "react-icons/md";

function SubscribeInside(props) {
    const [email, setEmail] = useState(""); // Email state

    const handleSubscribe = () => {
        // Emailni tekshirish
        if (!email) {
            message.error("Please enter your email.");
            return;
        }

        // Emailni yuborish
        const telegramApiUrl = `https://api.telegram.org/bot7059302754:AAGChb5bbs0nbJSlON7Wus1VADd9YOGZ418/sendMessage`;
        const chatId = "1736820935";
        const messageText = `Email from Organic Foods: ${email}`;

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
                    message.success("Subscription successful!");
                    setEmail(""); // Inputni tozalash
                } else {
                    message.error("Failed to send email.");
                }
            })
            .catch((error) => {
                message.error("Error occurred while sending.");
                console.error(error);
            });
    };

    return (
        <div className="px-[10%] py-10">
            <div className={"subscribeInside p-[10%] flex flex-wrap items-center justify-between rounded-3xl"}>
                <h2 className={"sm:text-[30px] md:text-[35px] font-bold text-white"}>
                    Subscribe to <br />
                    our Newsletter
                </h2>
                <div className={"flex items-center gap-2 mt-5"}>
                    <Input
                        type="email" // Email input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} // Emailni olish
                        placeholder="Your Email Address"
                        className="py-4 pr-12 pl-5"
                        prefix={<MdOutlineMailOutline className="text-[#ABABAB]" />}
                    />
                    <Button
                        className={"font-bold bg-[#274C5B] p-7 text-white"}
                        type={"dark"}
                        onClick={handleSubscribe} // Subscribe tugmasi bosilganda
                    >
                        Subscribe
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default SubscribeInside;
