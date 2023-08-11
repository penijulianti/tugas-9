import express from "express";

const desc=[
    {
        id: 1,
        name: "TREASURE",
        about: "Treasure adalah grup vokal pria Korea Selatan yang dibentuk oleh YG Entertainment melalui program YG Treasure Box yang terdiri dari 10 anggota, yaitu Choi Hyun-suk, Park Jihoon, Yoshi, Junkyu, Yoon Jae-hyuk, Asahi, Doyoung, Haruto, Park Jeongwoo, dan So Junghwan",
        aktif: 2020,
        label:  "YG Entertainment, YGEX, Columbia Records",
    },
    {
        id: 2,
        name: "BLACKPINK",
        about: "Blackpink adalah grup vokal wanita asal Korea Selatan. Blackpink dibentuk oleh YG Entertainment dengan beranggotakan empat orang, diantaranya Jennie, Jisoo, Lisa, dan Rosé.",
        aktif: 2016,
        label: "YG Entertainment, Interscope Records, YGEX",
    },
    {
        id: 3,
        name: "ITZY",
        about: "ITZY adalah grup musik perempuan besutan JYP Entertainment dengan anggota 5 orang, yaitu Hwang Ye-ji, Choi Ji-su, Shin Ryu-jin, Lee Chae-ryeong, dan Shin Yu-na. Grup ini debut pada 12 Februari 2019, dengan dirilisnya singel berjudul It'z Different.",
        aktif: 2019,
        label: "JYP Entertainment, Warner Music Group, Universal Republic Records",
    },
    {
        id: 4,
        name: "EVERGLOW",
        about: "Everglow adalah sebuah grup vokal perempuan Korea Selatan di bawah kontrak Yuehua Entertainment. Grup tersebut terdiri dari enam anggota: E:U, Sihyeon, Mia, Onda, Aisha, & Yiren. Grup tersebut melakukan debut pada 21 Maret 2019 dengan album Arrival Of Everglow.",
        aktif: 2019,
        label: "Yuehua Entertainment",
    },
    {
        id: 5,
        name: "SEVENTEEN",
        about: "Seventeen adalah sebuah boy band asal Korea Selatan yang dibentuk oleh Pledis Entertainment. Grup yang terdiri dari 13 anggota ini dibagi berdasarkan spesialisasi keahlian masing-masing ke dalam 3 sub-unit; hip-hop unit, vocal unit, dan performance unit.",
        aktif: 2015,
        label: "Pledis Entertainment, Universal Music Group, Geffen Records",
    },
]

const descRoute = express.Router();

descRoute.get("/",(_req,res)=>{
    res.json(desc);
})
descRoute.get("/:id", (req,res)=> {
    const dsc = desc.find((p)=> p.id == req.params.id);
    // berupa text
    if (dsc){
        res.json(dsc);
    }else{
        res.status(404);
        res.send("Boyband/Girlband Tidak Ditemukan atau belum ditambahkan");
    }
    
})

export default descRoute;