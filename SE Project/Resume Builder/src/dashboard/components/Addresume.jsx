import { CloudCog, PlusSquare } from "lucide-react";
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { v4 as uuidv4 } from 'uuid';

function Addresume() {
    const [openDialog, setOpenDialog] =React.useState(false)
    const [Resumetitle, setResumetitle] = React.useState('');
   
    
const onCreate= ()=>{
    const uuid = uuidv4();
    console.log(Resumetitle, uuid)
}
  return (
    <div>
      <div className="p-14 py-24 border items-center flex justify-center bg-secondary rounded-lg h-[280px] hover: scale-105 transition-all hover:shadow-md cursor-pointer border-dashed" onClick={()=>setOpenDialog(true)}>
        
        <PlusSquare />
      </div>
      <Dialog open ={openDialog}>
        
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Create New Resume</DialogTitle>
            <DialogDescription>
                <p>Add Title For Your Resume</p>
            <Input className="my-2" placeholder="Ex. Software Developer" onChange ={
               (e)=>setResumetitle(e.target.value) }/>

            </DialogDescription>
            <div className="flex justify-end gap-5">
                <Button variant="ghost" onClick={()=>setOpenDialog(false)}>Cancel</Button>
                <Button disabled={!Resumetitle} onClick={()=>onCreate}>Create Resume</Button>
            </div>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default Addresume;
