import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import HelloWorld from '../data_test/render';
import image from "../data_test/00-Linux-1200x900.png";
import { uploadImageLocal, supabase } from "@/utils/supabase";
import { signInClerk } from '@/data_test/func';
const fs = require('fs');
const path = require('path');




// describe('Render Test', () => {
//   it('demo render', () => {
//     const { getByText } = render(<HelloWorld />);
//     expect(getByText('HelloWorld')).toBeInTheDocument();
//   });
//   it('demo func', () => {
//     const a = () => {
//       return 1;
//     }
//     expect(a()).toBe(1);
//   });
  
  

//   it('test connect supabase upload image ', async () => {

//     const pathFIle = 'data_test/00-Linux-1200x900.png';
//     const imageBuffer = fs.readFileSync(pathFIle);
//     const fileName = path.basename(pathFIle);
//     const timestamp = Date.now();
//     const newName = `${timestamp}-${fileName}`;
    
//     const { data, error } = await supabase.storage
//     .from('data_bookingtravel')
//     .upload(newName, imageBuffer, {
//       cacheControl: '3600',
//     });


//     const result = await uploadImageLocal(imageBuffer, newName);
  
//     expect(typeof result).toBe('string');
   
//   });
 
  


// });

describe('Test fetch data', () => {
  it('should find user with correct clerkId and email in supabase', async () => {
    
    const { clerkId, email } = await signInClerk(); 
     console.log(clerkId,email);
  
    
    const { data, error } = await supabase
      .from('Profile')       
      .select('*')            
      .eq('clerkId', clerkId)  
      .eq('email', email);     
  
   
    if (error) {
      console.error('Lỗi khi truy vấn:', error.message);
      return;
    }
  
    
    
    
  });
  it('test fetch data profile', async () => {

    
   
    const { data, error } = await supabase
      .from('Profile')
      .select('*');
    if (error) {
      console.error('Lỗi khi lấy dữ liệu:', error.message);
      throw new Error(error.message);
    }
    expect(data).not.toBeNull();
    expect(typeof data).toBe('object');
    if (Array.isArray(data)) {
      expect(data.length).toBeGreaterThan(0);  // Kiểm tra nếu có ít nhất một bản ghi
    }
  });
});