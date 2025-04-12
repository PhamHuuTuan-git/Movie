"use client";
import { useState } from "react";
import { Select, SelectItem } from "@heroui/react";

export const animals = [
    { key: "cat", label: "Cat" },
    { key: "dog", label: "Dog" },
    { key: "elephant", label: "Elephant" },
    { key: "lion", label: "Lion" },
    { key: "tiger", label: "Tiger" },
    { key: "giraffe", label: "Giraffe" },
    { key: "dolphin", label: "Dolphin" },
    { key: "penguin", label: "Penguin" },
    { key: "zebra", label: "Zebra" },
    { key: "shark", label: "Shark" },
    { key: "whale", label: "Whale" },
    { key: "otter", label: "Otter" },
    { key: "crocodile", label: "Crocodile" },
];

function MoviesFilter() {
    const [value, setValue] = useState("");

    console.log("selected: ", value)
    const handleSelectionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setValue(e.target.value);
    };
    return (
        <div key="sm" className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
            <Select className="max-w-xs" label="Select an animal" size="sm" selectedKeys={[value]}
                onChange={handleSelectionChange}>
                {animals.map((animal) => (
                    <SelectItem key={animal.key}>{animal.label}</SelectItem>
                ))}
            </Select>

        </div>
    )
}

export default MoviesFilter