import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import HelloWorld from '../data_test/render';
import image from "../data_test/00-Linux-1200x900.png";
import { uploadImageLocal, supabase } from "@/utils/supabase";
const fs = require('fs');
const path = require('path');




describe('Render Test', () => {
  it('demo render', () => {
    const { getByText } = render(<HelloWorld />);
    expect(getByText('HelloWorld')).toBeInTheDocument();
  });
  it('demo func', () => {
    const a = () => {
      return 1;
    }
    expect(a()).toBe(1);
  });
  
  

  it('test connect supabase upload image ', async () => {

    const pathFIle = 'data_test/00-Linux-1200x900.png';
    const imageBuffer = fs.readFileSync(pathFIle);
    const fileName = path.basename(pathFIle);
    const timestamp = Date.now();
    const newName = `${timestamp}-${fileName}`;
    
    const { data, error } = await supabase.storage
    .from('data_bookingtravel')
    .upload(newName, imageBuffer, {
      cacheControl: '3600',
    });


    const result = await uploadImageLocal(imageBuffer, newName);
  
    expect(typeof result).toBe('string');
   
  });




});