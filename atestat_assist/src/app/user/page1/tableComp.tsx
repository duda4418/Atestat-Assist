'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'; 
import { Notebook, Edit, Trash } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ModalComp from './modalComp';

const TableExample = () => {

  const loadTableData = () => {
    const storedData = localStorage.getItem('tableData');
    return storedData ? JSON.parse(storedData) : [
      { name: 'John Doe', date: '2025-02-09', money: '$500' },
      { name: 'Jane Smith', date: '2025-01-22', money: '$1200' },
      { name: 'Samuel Green', date: '2024-12-15', money: '$700' },
    ];
  };

  const [tableData, setTableData] = useState(loadTableData());
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newPerson, setNewPerson] = useState({ name: '', date: '', money: '' });
  const [editIndex, setEditIndex] = useState<number | null>(null);

  useEffect(() => {
    localStorage.setItem('tableData', JSON.stringify(tableData));
  }, [tableData]);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setEditIndex(null);
    setNewPerson({ name: '', date: '', money: '' });
  };

  const handleEdit = (index: number) => {
    setEditIndex(index);
    setNewPerson(tableData[index]);
    setIsModalOpen(true);
  };

  const handleDelete = (index: number) => {
    const updatedTableData = tableData.filter((_:any, i:any) => i !== index);
    setTableData(updatedTableData);
  };

  return (
    <div>
      <Card className="w-full">
        <CardHeader>
          <CardTitle className="text-center">Table Example</CardTitle>
        </CardHeader>
        <CardContent>
          <table className="min-w-full table-auto">
            <thead>
              <tr className="bg-gray-200">
                <th className="px-4 py-2 text-left font-semibold">Name</th>
                <th className="px-4 py-2 text-left font-semibold">Date</th>
                <th className="px-4 py-2 text-left font-semibold">Money</th>
                <th className="w-1 px-4 py-2 text-left font-semibold">Actions</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((item:any, index:any) => (
                <tr key={index} className="border-b">
                  <td className="px-4 py-2">{item.name}</td>
                  <td className="px-4 py-2">{item.date}</td>
                  <td className="px-4 py-2">{item.money}</td>
                  <td className=" px-4 py-2 flex space-x-2 ">
                    <Button onClick={() => handleEdit(index)} className="bg-yellow-500 text-white">
                      <Edit className="mr-2" /> Edit
                    </Button>
                    <Button onClick={() => handleDelete(index)} className="bg-red-500 text-white">
                      <Trash className="mr-2" /> Delete
                    </Button>
                  </td>
                  
                </tr>
              ))}
            </tbody>
          </table>
        </CardContent>
      </Card>

      <div className="flex justify-center items-center">
        <Button className="my-4" onClick={handleOpenModal}>
          <Notebook className="mr-2" />
          Add Person
        </Button>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <ModalComp editIndex = {editIndex} setEditIndex = {setEditIndex} newPerson = {newPerson} setNewPerson={setNewPerson}
          tableData={tableData} setTableData={setTableData} handleCloseModal={handleCloseModal} />
      )}
    </div>
  );
};

export default TableExample;
