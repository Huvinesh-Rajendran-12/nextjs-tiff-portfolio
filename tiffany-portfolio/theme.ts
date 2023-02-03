import { extendTheme } from "@chakra-ui/react";

async function extendedTheme() {
    const custom_theme = extendTheme({
        colors:{
            primary:"#000000",
            secondary:"#FFFFFF",
        },
        fonts:{
            primary: `'Inter', sans-serif`,
            title: `'Inter', sans-serif`,
            content:  `'Inter', sans-serif`,
            animation:  `'Inter', sans-serif`,
        },
        components: {
            Button:{
                variants:{
                    solid:{
    
                    },
                    link: {
                        color: "secondary",
                    }
                }
            }
        }
    
    });
    return custom_theme
    
}



export default extendedTheme