import {
  Divider,
  Grid,
  IconButton,
  Typography,
  useMediaQuery,
} from "@mui/material";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import EmailIcon from "@mui/icons-material/Email";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import {
  Instagram,
  Facebook,
  Twitter,
  Email,
  WhatsApp,
  YouTube,
} from "@mui/icons-material";

export const Footer = () => {
  const isMobile = useMediaQuery("(max-width:430px)");
  const isTablet = useMediaQuery("(max-width:820px)");
  return (
    <Grid
      padding={2}
      sx={{ background: "linear-gradient(to top, #789866, #e0dddd)" }}
    >
      <Grid
        container
        alignItems={"center"}
        justifyContent={"space-around"}
        spacing={2}
      >
        <Grid item xs={isMobile ? 12 : isTablet ? 12 : 8}>
          <Typography
            variant="body1"
            fontWeight={"bold"}
            fontSize={isMobile ? 28 : isTablet ? 35 : 45}
            fontFamily={"sans-serif !important"}
            color={"secondary"}
          >
            Fale conosco
          </Typography>

          <Grid container alignItems={"center"} marginBottom={1}>
            <PhoneInTalkIcon color="primary" />
            <Typography
              fontSize={isMobile ? 9 : 15}
              fontWeight={"bold"}
              color={"secondary"}
              fontFamily={"sans-serif !important"}
            >
              &nbsp; 83 99999-9999 - 83 98888-8888
            </Typography>
          </Grid>
          <Grid container alignItems={"center"} marginBottom={1}>
            <EmailIcon color="primary" />
            <Typography
              fontSize={isMobile ? 9 : 15}
              fontWeight={"bold"}
              color={"secondary"}
              fontFamily={"sans-serif !important"}
            >
              &nbsp; bacaninha@bacana.com.br
            </Typography>
          </Grid>
          <Grid container alignItems={"center"} marginBottom={1}>
            <FmdGoodIcon color="primary" />
            <Typography
              fontSize={isMobile ? 9 : 15}
              fontWeight={"bold"}
              fontFamily={"sans-serif !important"}
              color={"secondary"}
            >
              &nbsp; Rua Siqueira Campos, 306, Sala 2, São josé, Campina Grande
              - PB, CEP: 58313-000
            </Typography>
          </Grid>
        </Grid>

        <Grid item>
          <img
            style={{ width: isMobile || isTablet ? 100 : 150 }}
            src="/images/logo-without-bg.png"
            alt=""
          />
        </Grid>

        <Grid container justifyContent={"center"}>
          <IconButton
            sx={{
              "&:hover": { color: "#bcccb3" },
            }}
          >
            <Instagram />
          </IconButton>
          <IconButton
            sx={{
              "&:hover": { color: "#bcccb3" },
            }}
          >
            <Facebook />
          </IconButton>
          <IconButton
            sx={{
              "&:hover": { color: "#bcccb3" },
            }}
          >
            <Twitter />
          </IconButton>
          <IconButton
            sx={{
              "&:hover": { color: "#bcccb3" },
            }}
          >
            <YouTube />
          </IconButton>
          <IconButton
            sx={{
              "&:hover": { color: "#bcccb3" },
            }}
          >
            <Email />
          </IconButton>
          <IconButton
            sx={{
              "&:hover": { color: "#bcccb3" },
            }}
          >
            <WhatsApp />
          </IconButton>
        </Grid>

        <Grid />
      </Grid>
      <Divider sx={{ marginBottom: 2 }} />

      <Typography
        align="center"
        fontWeight={"bold"}
        fontFamily={"sans-serif !important"}
        color={"secondary"}
        fontSize={isMobile ? 9 : 15}
      >
        © 2024 Bellevita. Todos os direitos reservados.
      </Typography>
    </Grid>
  );
};
