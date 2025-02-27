import Image from "next/image";
import Sidebar from "../SideBar";
import { Button } from "@/components/ui/button";
import { Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue, } from "@/components/ui/select";

export default function ProfileModal({changeProfile, setChangeProfile, profileData, setProfileData, editIndex, handleCloseModal} :any) {

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setChangeProfile((prev:any) => ({
          ...prev,
          [name]: value,
        }));
      };
    
      const handleSubmit = () => {
        if (changeProfile.name && changeProfile.adress && changeProfile.email) {
          let updatedTableData = [...profileData];
          
          if (editIndex !== null) {
            updatedTableData[editIndex] = changeProfile;
          } else {
            updatedTableData.push(changeProfile);
          }
    
          setProfileData(updatedTableData);
          setChangeProfile({ name: '', adress: '', email:'' });
          /*setEditProfile(true)*/
        } 
      };

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
         
          <div className='m-4'>
            <div className="mb-4">
              <label className="block text-sm font-semibold">Name</label>
              <input
                type="text"
                name="detail"
                value={changeProfile.name}
                onChange={handleInputChange}
                
                className="w-full p-2 border border-gray-300 rounded"
              />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-semibold">Adress</label>
                <input
                  type="text"
                  name="importance"
                  value={changeProfile.adress}
                  onChange={handleInputChange}
                  
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-semibold">Email</label>
                <input
                  type="text"
                  name="date"
                  value={changeProfile.email}
                  onChange={handleInputChange}
                  
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
              <div className="flex justify-between">
              <Button onClick={handleCloseModal} className="bg-gray-500 text-white">Cancel</Button>
              <Button onClick={handleSubmit} className="bg-blue-500 text-white">{editIndex !== null ? 'Update' : 'Add'}</Button>
            </div>
            </div>
        </div>
    </div>
  );
}


