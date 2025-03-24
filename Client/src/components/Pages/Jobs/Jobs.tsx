import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react"

export const Jobs = () => {

  const [currentTab, setCurrentTab] = useState('All Jobs');

  enum tabs {
    'All Jobs' = 'All Jobs',
    'My Jobs' = 'My Jobs',
    'Post Job' = 'Post Job'
  };

  const handlePostJob = async () => {

  };

  return (
    <div className="bg-[hsl(240,10%,3.9%)] w-screen min-h-screen pt-16 text-white p-8">
      <h2 className="font-semibold text-3xl my-4">Job Opportunities</h2>
      <div className="flex gap-3 items-center ml-2 text-sm font-semibold"> 
        <div className={`${currentTab == "All Jobs"? "bg-white text-black" : ""} px-2 py-1 cursor-pointer rounded-t-md`} onClick={() => setCurrentTab("All Jobs")}>{tabs["All Jobs"]}</div>
        <div className={`${currentTab == "My Jobs"? "bg-white text-black" : ""} px-2 py-1 cursor-pointer rounded-t-md`} onClick={() => setCurrentTab("My Jobs")}>{tabs["My Jobs"]}</div>
        <div className={`${currentTab == "Post Job"? "bg-white text-black" : ""} px-2 py-1 cursor-pointer rounded-t-md`} onClick={() => setCurrentTab("Post Job")}>{tabs["Post Job"]}</div>
      </div>  

      <div className="w-[95vw] h-max border-2 p-6 rounded-md">
        {
          currentTab === 'Post Job' && 
          <form className="space-y-6 grid grid-cols-2 gap-x-6">
          <div className="space-y-2">
            <Label htmlFor="company">Company</Label>
            <Input type="text" className="rounded-sm" placeholder="Company name" required/>
          </div>
          <div className="space-y-2">
            <Label htmlFor="title">Job title</Label>
            <Input type="text" className="rounded-sm" placeholder="Job title" required/>
          </div>
          <div className="space-y-2">
            <Label htmlFor="salary">Expected Salary</Label>
            <Input type="text" className="rounded-sm" placeholder="$ 00.00"/>
          </div>
          <div className="space-y-2">
            <Label htmlFor="location">Location</Label>
            <Input type="text" className="rounded-sm" placeholder="work location" required/>
          </div>
          <div className="space-y-2">
            <Label htmlFor="job description">Job description</Label>
            <textarea rows={10} className="w-[100%] bg-black rounded-md focus:outline-none border p-2 text-sm" placeholder="Enter job description" required></textarea>
          </div>
          <div className="space-y-2">
            <Label htmlFor="link">Related links</Label>
            <Input type="text" className="rounded-sm" placeholder="https://helpmegetthejob.com"/>
          </div>

          <Button onClick={handlePostJob} type="submit" className="bg-white text-black text-sm hover:text-white hover:bg-black hover:border cursor-pointer">Post job</Button>
          </form>
        }
      </div>


    </div>
  )
}
