import {
  Divider,
  Grid,
  IconButton,
  Tooltip,
  Typography,
  useMediaQuery,
} from "@mui/material";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import EmailIcon from "@mui/icons-material/Email";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import {
  Instagram,
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
            href="https://www.instagram.com/bellevitacg/"
            target="_blank"
            aria-label="instagram"
          >
            <Instagram
              sx={{
                "&:hover": { color: "#bcccb3" },
              }}
            />
          </IconButton>
          <IconButton>
            <Tooltip title="Em desenvolvimento">
              <YouTube
                sx={{
                  "&:hover": { color: "#bcccb3" },
                }}
              />
            </Tooltip>
          </IconButton>
          <IconButton
            onClick={() =>
              window.open("mailto:barbosadesousadvogados@gmail.com")
            }
          >
            <Email
              sx={{
                "&:hover": { color: "#bcccb3" },
              }}
            />
          </IconButton>
          <IconButton
            href="https://www.instagram.com/bsadvogadoss/"
            target="_blank"
            aria-label="whatsapp"
          >
            <WhatsApp
              sx={{
                "&:hover": { color: "#bcccb3" },
              }}
            />
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
