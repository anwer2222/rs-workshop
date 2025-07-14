"use client"
import React from "react";
import Image from "next/image";
import { Form as Formm, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import Link from "next/link";
// import Radio from "./Radio";

const Form = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 ">
          <div className=" bg-[#F4F4F0]  h-[570px]  w-full lg:col-span-3 overflow-y-auto">
              
            {/* <Form> onSubmit="form.handleSubmit(onSubmit)" */}
              <form  className="flex flex-col gap-8 p-4 lg:p-16">
                <div className="flex items-center justify-center mb-8">
                  <Link href="/">
                     <Image src="/logo1.png" width={150} height={150} alt=""/>
                  </Link>
                </div>
                 <FormField
                  name="age"
                  render={() =>(
                  <FormItem>
                    <FormLabel className="text-base">كم هو عمرك *</FormLabel>
                    <FormControl>
                      {/* <Radio radios={["17-25","26-35","36-45+"]} r="c" field={field}/> */}
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                  )}
                />
                </form>
                {/* </Form> */}
                </div>
                </div>

    )
}

export default Form;