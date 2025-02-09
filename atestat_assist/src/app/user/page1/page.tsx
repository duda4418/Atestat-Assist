'use client'
import Image from "next/image";

import Sidebar from "../SideBar";
import { useState } from 'react';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"; // Importing Accordion components from Shadcn UI
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'; // Importing Card components
import TableExample from "./tableComp";
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button";


const accordionData = [
  { name: 'John Doe', date: '2025-02-09', money: '$500' },
  { name: 'Jane Smith', date: '2025-01-22', money: '$1200' },
  { name: 'Samuel Green', date: '2024-12-15', money: '$700' },
];
export default function Home() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1">
        <div className="flex-1 p-4"> 
          <Input placeholder="Search" />
        </div>
        <div className="flex-1 p-4"> 
          <TableExample/>
        </div>
        
      </div>
    </div>
  );
}
