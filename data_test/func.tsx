const axios = require('axios');

export const testLogin = async () => {
    const pathProjectLogin = 'https://witty-shrew-67.clerk.accounts.dev/v1/client/sign_ins'
    const pathDb = '_clerk_js_version=5.31.2&__clerk_db_jwt=dvb_2oY3TKASoqVhQOuniibpLfyiT2o'

    let UserData = []
    try {
        let data = JSON.stringify({
            'identifier': '6251071040@st.utc2.edu.vn',
            'password': 'Huy0835450077123123',
            'strategy': 'password' 
          });
          
          let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: pathProjectLogin + '?' + pathDb,
            headers: { 
              'Content-Type': 'application/x-www-form-urlencoded', 'Cookie': '__cf_bm=jYfiKWdnDdTcFmYxeiuhqdBug4rV4k_GOYT4sq94Pa4-1731087707-1.0.1.1-loBCrAIj0.e89i4.jOJtODbUqlcUZFlMgJvzSJpNE.Ul40S6_fH6OxZP7w6hXi0Q8CVcbiagUywTlfXvQiSdJg; _cfuvid=uniJ2.6aXWFh_x6TTshjgRoqymf1yNAwdGKVzSo8pmM-1731087707690-0.0.1.1-604800000'
            },
            data : data
          };
          
          await axios.request(config)
        
    }catch (error:any) {
        UserData =  error.response?.data?.meta?.client?.sessions || [];
      
      
    }finally{
        console.log('User Data', UserData[0].user.email_addresses[0].email_address);
        
    }
    return UserData[0].user.id;
    
    

}
