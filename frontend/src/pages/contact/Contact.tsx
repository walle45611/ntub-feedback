import { Button, Input, Select, SelectItem, Textarea } from "@nextui-org/react";
import { useState } from "react";
import { animals } from "../../libs";

export const Contact = () => {
    const [feedback, setFeedback] = useState("");

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    };

    return (
        <section className="bg-white dark:bg-gradevco.re-900">
            <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
                    聯絡我們
                </h2>
                <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
                    如果您在使用我們的系統時遇到了任何問題，請填寫以下的聯絡表單，收到您的訊息後儘快與您聯絡。
                </p>
                <form
                    action="#"
                    className="space-y-8 text-center"
                    onSubmit={handleSubmit}
                >
                    <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
                        <Select isRequired label="選擇系統">
                            {animals.map((animal) => (
                                <SelectItem
                                    key={animal.value}
                                    value={animal.value}
                                >
                                    {animal.label}
                                </SelectItem>
                            ))}
                        </Select>
                        <Input
                            isRequired
                            errorMessage="請輸入有效的 email"
                            type="email"
                            label="Email"
                            placeholder="輸入你的 email"
                        />
                    </div>
                    <div>
                        <Input isRequired errorMessage="請選輸入標題" type="text" label="標題" />
                    </div>
                    <Textarea
                        isRequired
                        value={feedback}
                        onValueChange={setFeedback}
                        isInvalid={feedback.length > 250}
                        label="寫下你的回饋"
                        placeholder="輸入你想寫的回饋 (250 字以內)"
                        errorMessage="回饋應該少於 250 字"
                    />
                    <Button color="primary" type="submit">
                        送出
                    </Button>
                </form>
            </div>
        </section>
    );
};
