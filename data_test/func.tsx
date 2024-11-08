
import image from "./00-Linux-1200x900.png"



import { createClient } from '@supabase/supabase-js';
import { uploadImage, supabase } from "@/utils/supabase";


export const uploadImageTest = async () => {

    const file = new File([new Blob()], image.src, { type: 'image/png' });
    const url = await uploadImage(file);
    return url;
  
}
