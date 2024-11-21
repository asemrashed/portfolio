import { Button } from "@mui/material";

export default function Btn({
    variant, value, onClick,href, height='2em', 
    size, color='secondary.contrastText', 
    bg='secondary.main',hoverBg='white', 
    hoverText='text.main', outline, width='8em',minWidth='5em', minD='block', maxD="block"}) {
    
    const handleClick = () => {
      if (onClick) {
        onClick();
      } else if (href) {
        window.location.href = href;  // Redirect to the provided URL
      }
    };
    
    return (
    <Button
      variant={variant}
      onClick={handleClick}
      type="submit"
      sx={{
        display:{xs: minD, md: maxD},
        bgcolor: bg,
        color: color,
        fontSize:{xs: '12px', md:'15px'},
        height:height,
        width: {xs:minWidth, md:width},
        ':hover':{
          color: hoverText,
          backgroundColor: hoverBg,
        }
      }}
    >
      {value}
    </Button>
  );
}
