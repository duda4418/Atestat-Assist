'use client'
import { CircleUserRound } from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { useEffect } from 'react';
import ProfileModal from './profileModal';

export default function UserProfile() {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editProfile, setEditProfile] = useState(false)
  const [changeProfile, setChangeProfile] = useState({ name: '', adress: '', email:'' });
  const editIndex  = 0;


  const handleOpenModal = () => {
    setIsModalOpen(true);
  };
  const handleCloseModal = () => {
    setIsModalOpen(false);
   
    setChangeProfile({ name: '', adress: '', email:'' });
  };

  const loadProfileData = () => {
    const storedData = localStorage.getItem('profileData');
    return storedData ? JSON.parse(storedData) : [
      { name: "David", adress:'str Viitorului', email:'david.serban@email.com' },
    ];
  };
  const [profileData, setProfileData] = useState(loadProfileData());

  

  useEffect(() => {
      localStorage.setItem('profileData', JSON.stringify(profileData));
    }, [profileData]);
  return (
      <div className="">
        <CircleUserRound size={100} className='m-4'/>
              <div className='mx-4'>
        <div className="mb-4">
          <input disabled placeholder="David" className="w-full p-2 border border-gray-300 rounded"/>
        </div>
        <div className="mb-4">
          <input disabled placeholder="str Viitorului" className="w-full p-2 border border-gray-300 rounded"/>
        </div>
        <div className="mb-4">
          <input disabled placeholder="david.serban@email.com" className="w-full p-2 border border-gray-300 rounded"/>
        </div>
        <Button onClick={handleOpenModal} className=''>Edit</Button>
        </div>
        {isModalOpen && (
                <ProfileModal changeProfile={changeProfile} setChangeProfile={setChangeProfile} profileData={profileData} setProfileData={setProfileData} 
                              editIndex={editIndex} handleCloseModal={handleCloseModal}/>
              )}
      </div>
    
  );
}
