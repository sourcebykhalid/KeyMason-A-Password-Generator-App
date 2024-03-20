import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import img1 from "../img/1.svg";
import img2 from "../img/2.svg";
import img3 from "../img/3.svg";
export default function ActionAreaCard() {
  return (
    <div className="flex flex-col md:flex-row mb-36 justify-around items-center  p-5 bg-blue-200 min-h-screen m-6 shadow-md shadow-black">
      <Card
        sx={{ maxWidth: 345, borderRadius: 5 }}
        className="mb-4 md:mb-0 bg-black"
      >
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={img1}
            alt="green iguana"
            style={{ width: 123, marginLeft: 100, marginTop: 30 }}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Long
            </Typography>
            <Typography variant="body2" color="text.secondary">
              The security of a password increases with its length. A robust
              password should consist of at least 10 characters.
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>

      <Card sx={{ maxWidth: 345, borderRadius: 5 }} className="mb-4 md:mb-0">
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={img2}
            alt="green iguana"
            style={{ width: 123, marginLeft: 100, marginTop: 30 }}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Complex
            </Typography>
            <Typography variant="body2" color="text.secondary">
              strong passwords are created by incorporating a blend of letters,
              numbers, uppercase and lowercase characters, as well as symbols.
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>

      <Card sx={{ maxWidth: 345, borderRadius: 5 }} className="mb-4 md:mb-0">
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={img3}
            alt="green iguana"
            style={{
              width: 123,
              marginLeft: 100,
              marginTop: 30,
            }}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Unique
            </Typography>
            <Typography variant="body2" color="text.secondary">
              To minimize vulnerability in case of a breach, it&apos;s essential
              for each account to have a unique and distinct password.
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}
