import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import HelloWorld from '../data_test/render';
import image from "../data_test/00-Linux-1200x900.png";
import { uploadImage, supabase , uploadImageTest} from "@/utils/supabase";












// jest.mock('@supabase/supabase-js', () => {
//   return {
//     createClient: jest.fn(() => ({
//       storage: {
//         from: jest.fn(() => ({
//           upload: jest.fn(() => ({
//             data: { Key: 'mocked-key' },
//             error: null,
//           })),
//           getPublicUrl: jest.fn(() => ({
//             data: { publicUrl: 'http://example.com/mocked-key' },
//           })),
//         })),
//       },
//     })),
//   };
// });


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
 

    const result = await uploadImageTest();
    expect(typeof result).toBe('string');
   
  });




});