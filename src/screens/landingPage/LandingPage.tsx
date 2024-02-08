import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Button,
  Alert,
  TouchableOpacity,
  Image,
  ScrollView,
  Dimensions,
  Platform, 
  StatusBar 
} from "react-native";
import {Ionicons, Entypo } from "@expo/vector-icons";

import { getArtise, getArtises } from "../../services/artises";

import ArtiseCard from "../../components/ArtiseCard";



function LandingPage({navigation}) {
  const [trends, setTrends] = useState([
    {
      id: 1,
      name: "Doja Cat",
      artise_id: "kekvy18BhIwxCy",
      email: "",
      status: "0000-00-00 00:00:00",
      gender: null,
      contact_number: null,
      country: null,
      genres: null,
      followers: "28028845",
      bg_img:
        "https://i.scdn.co/image/ab6761610000e5eb7f6d6cac38d494e87692af99",
      md_img:
        "https://i.scdn.co/image/ab676161000051747f6d6cac38d494e87692af99",
      sm_img:
        "https://i.scdn.co/image/ab6761610000f1787f6d6cac38d494e87692af99",
      spotify_id: "5cj0lLjcoR7YOSnhnX0Po5",
      created_at: null,
      updated_at: null,
    },
    {
      id: 3,
      name: "Adele",
      artise_id: "OOmfckk2iGlnWo",
      email: "",
      status: "0000-00-00 00:00:00",
      gender: null,
      contact_number: null,
      country: null,
      genres: null,
      followers: "53310903",
      bg_img:
        "https://i.scdn.co/image/ab6761610000e5eb68f6e5892075d7f22615bd17",
      md_img:
        "https://i.scdn.co/image/ab6761610000517468f6e5892075d7f22615bd17",
      sm_img:
        "https://i.scdn.co/image/ab6761610000f17868f6e5892075d7f22615bd17",
      spotify_id: "4dpARuHxo51G3z768sgnrY",
      created_at: null,
      updated_at: null,
    },
    {
      id: 7,
      name: "Arctic Monkeys",
      artise_id: "Y52q0vVFanjkAt",
      email: "",
      status: "0000-00-00 00:00:00",
      gender: null,
      contact_number: null,
      country: null,
      genres: null,
      followers: "22976192",
      bg_img:
        "https://i.scdn.co/image/ab6761610000e5eb7da39dea0a72f581535fb11f",
      md_img:
        "https://i.scdn.co/image/ab676161000051747da39dea0a72f581535fb11f",
      sm_img:
        "https://i.scdn.co/image/ab6761610000f1787da39dea0a72f581535fb11f",
      spotify_id: "7Ln80lUS6He07XvHI8qqHH",
      created_at: null,
      updated_at: null,
    },
    {
      id: 12,
      name: "Rauw Alejandro",
      artise_id: "04m1Ye7FPE0wBp",
      email: "",
      status: "0000-00-00 00:00:00",
      gender: null,
      contact_number: null,
      country: null,
      genres: null,
      followers: "20048836",
      bg_img:
        "https://i.scdn.co/image/ab6761610000e5eb9047f938310ea16b68a5bdeb",
      md_img:
        "https://i.scdn.co/image/ab676161000051749047f938310ea16b68a5bdeb",
      sm_img:
        "https://i.scdn.co/image/ab6761610000f1789047f938310ea16b68a5bdeb",
      spotify_id: "1mcTU81TzQhprhouKaTkpq",
      created_at: null,
      updated_at: null,
    },
    {
      id: 19,
      name: "The Neighbourhood",
      artise_id: "csjCOAZPC7WLGi",
      email: "",
      status: "0000-00-00 00:00:00",
      gender: null,
      contact_number: null,
      country: null,
      genres: null,
      followers: "14855255",
      bg_img:
        "https://i.scdn.co/image/ab6761610000e5ebdf0b5ac84376a0a4b2166816",
      md_img:
        "https://i.scdn.co/image/ab67616100005174df0b5ac84376a0a4b2166816",
      sm_img:
        "https://i.scdn.co/image/ab6761610000f178df0b5ac84376a0a4b2166816",
      spotify_id: "77SW9BnxLY8rJ0RciFqkHh",
      created_at: null,
      updated_at: null,
    },
    {
      id: 27,
      name: "Guns N' Roses",
      artise_id: "5L5sj05yaFKWol",
      email: "",
      status: "0000-00-00 00:00:00",
      gender: null,
      contact_number: null,
      country: null,
      genres: null,
      followers: "30302443",
      bg_img:
        "https://i.scdn.co/image/ab6761610000e5eb50defaf9fc059a1efc541f4c",
      md_img:
        "https://i.scdn.co/image/ab6761610000517450defaf9fc059a1efc541f4c",
      sm_img:
        "https://i.scdn.co/image/ab6761610000f17850defaf9fc059a1efc541f4c",
      spotify_id: "3qm84nBOXUEQ2vnTfUTTFC",
      created_at: null,
      updated_at: null,
    },
    {
      id: 31,
      name: "Christian Nodal",
      artise_id: "gFyAqYGA72q1gz",
      email: "",
      status: "0000-00-00 00:00:00",
      gender: null,
      contact_number: null,
      country: null,
      genres: null,
      followers: "14169300",
      bg_img:
        "https://i.scdn.co/image/ab6761610000e5eb812448def68448aa5893d73b",
      md_img:
        "https://i.scdn.co/image/ab67616100005174812448def68448aa5893d73b",
      sm_img:
        "https://i.scdn.co/image/ab6761610000f178812448def68448aa5893d73b",
      spotify_id: "0XwVARXT135rw8lyw1EeWP",
      created_at: null,
      updated_at: null,
    },
    {
      id: 36,
      name: "Avicii",
      artise_id: "jxXlRZbDohfYKs",
      email: "",
      status: "0000-00-00 00:00:00",
      gender: null,
      contact_number: null,
      country: null,
      genres: null,
      followers: "23004438",
      bg_img:
        "https://i.scdn.co/image/ab6761610000e5ebae07171f989fb39736674113",
      md_img:
        "https://i.scdn.co/image/ab67616100005174ae07171f989fb39736674113",
      sm_img:
        "https://i.scdn.co/image/ab6761610000f178ae07171f989fb39736674113",
      spotify_id: "1vCWHaC5f2uS3yhpwWbIA6",
      created_at: null,
      updated_at: null,
    },
    {
      id: 47,
      name: "Alan Walker",
      artise_id: "EP4jvIKMnTwT9C",
      email: "",
      status: "0000-00-00 00:00:00",
      gender: null,
      contact_number: null,
      country: null,
      genres: null,
      followers: "39269557",
      bg_img:
        "https://i.scdn.co/image/ab6761610000e5ebbf753c009fd9c2d53351dd3c",
      md_img:
        "https://i.scdn.co/image/ab67616100005174bf753c009fd9c2d53351dd3c",
      sm_img:
        "https://i.scdn.co/image/ab6761610000f178bf753c009fd9c2d53351dd3c",
      spotify_id: "7vk5e3vY1uw9plTHJAMwjN",
      created_at: null,
      updated_at: null,
    },
    {
      id: 67,
      name: "Arijit Singh",
      artise_id: "2A9hP5ULL2VV70",
      email: "",
      status: "0000-00-00 00:00:00",
      gender: null,
      contact_number: null,
      country: null,
      genres: null,
      followers: "98788821",
      bg_img:
        "https://i.scdn.co/image/ab6761610000e5eb0261696c5df3be99da6ed3f3",
      md_img:
        "https://i.scdn.co/image/ab676161000051740261696c5df3be99da6ed3f3",
      sm_img:
        "https://i.scdn.co/image/ab6761610000f1780261696c5df3be99da6ed3f3",
      spotify_id: "4YRxDV8wJFPHPTeXepOstw",
      created_at: null,
      updated_at: null,
    },
    {
      id: 90,
      name: "James Arthur",
      artise_id: "xhIWVs46LthVTD",
      email: "",
      status: "0000-00-00 00:00:00",
      gender: null,
      contact_number: null,
      country: null,
      genres: null,
      followers: "15038801",
      bg_img:
        "https://i.scdn.co/image/ab6761610000e5eb2a0c6d0343c82be9dd6fce0b",
      md_img:
        "https://i.scdn.co/image/ab676161000051742a0c6d0343c82be9dd6fce0b",
      sm_img:
        "https://i.scdn.co/image/ab6761610000f1782a0c6d0343c82be9dd6fce0b",
      spotify_id: "4IWBUUAFIplrNtaOHcJPRM",
      created_at: null,
      updated_at: null,
    },
    {
      id: 165,
      name: "Alka Yagnik",
      artise_id: "8LlunvqVfl5FvI",
      email: "",
      status: "0000-00-00 00:00:00",
      gender: null,
      contact_number: null,
      country: null,
      genres: null,
      followers: "12728775",
      bg_img:
        "https://i.scdn.co/image/ab6761610000e5eb935b2dd507212bd72a71d7f9",
      md_img:
        "https://i.scdn.co/image/ab67616100005174935b2dd507212bd72a71d7f9",
      sm_img:
        "https://i.scdn.co/image/ab6761610000f178935b2dd507212bd72a71d7f9",
      spotify_id: "3gBKY0y3dFFVRqicLnVZYz",
      created_at: null,
      updated_at: null,
    },
    {
      id: 801,
      name: "Ankit Tiwari",
      artise_id: "ld5VAOhozwXxrt",
      email: "",
      status: "0000-00-00 00:00:00",
      gender: null,
      contact_number: null,
      country: null,
      genres: null,
      followers: "13522615",
      bg_img:
        "https://i.scdn.co/image/ab6761610000e5ebe26e237ca6b143ca2074589a",
      md_img:
        "https://i.scdn.co/image/ab67616100005174e26e237ca6b143ca2074589a",
      sm_img:
        "https://i.scdn.co/image/ab6761610000f178e26e237ca6b143ca2074589a",
      spotify_id: "0E02VcvA5p1ndkLdqWD5JB",
      created_at: null,
      updated_at: null,
    },
    {
      id: 953,
      name: "Bruno Mars",
      artise_id: "FZ9yTWz15qbm3v",
      email: "",
      status: "0000-00-00 00:00:00",
      gender: null,
      contact_number: null,
      country: null,
      genres: null,
      followers: "52904714",
      bg_img:
        "https://i.scdn.co/image/ab6761610000e5ebc36dd9eb55fb0db4911f25dd",
      md_img:
        "https://i.scdn.co/image/ab67616100005174c36dd9eb55fb0db4911f25dd",
      sm_img:
        "https://i.scdn.co/image/ab6761610000f178c36dd9eb55fb0db4911f25dd",
      spotify_id: "0du5cEVh5yTK9QJze8zA0C",
      created_at: null,
      updated_at: null,
    },
    {
      id: 994,
      name: "Banda MS de Sergio Lizárraga",
      artise_id: "cIZmlK9MixTWKn",
      email: "",
      status: "0000-00-00 00:00:00",
      gender: null,
      contact_number: null,
      country: null,
      genres: null,
      followers: "17554619",
      bg_img:
        "https://i.scdn.co/image/ab6761610000e5eb33602b1cfa2275dd642af38d",
      md_img:
        "https://i.scdn.co/image/ab6761610000517433602b1cfa2275dd642af38d",
      sm_img:
        "https://i.scdn.co/image/ab6761610000f17833602b1cfa2275dd642af38d",
      spotify_id: "2C6i0I5RiGzDKN9IAF8reh",
      created_at: null,
      updated_at: null,
    },
    {
      id: 1174,
      name: "Badshah",
      artise_id: "KXAF99yjpu2bek",
      email: "",
      status: "0000-00-00 00:00:00",
      gender: null,
      contact_number: null,
      country: null,
      genres: null,
      followers: "25775957",
      bg_img:
        "https://i.scdn.co/image/ab6761610000e5eb97312c6dba65719350b5f78e",
      md_img:
        "https://i.scdn.co/image/ab6761610000517497312c6dba65719350b5f78e",
      sm_img:
        "https://i.scdn.co/image/ab6761610000f17897312c6dba65719350b5f78e",
      spotify_id: "0y59o4v8uw5crbN9M3JiL1",
      created_at: null,
      updated_at: null,
    },
    {
      id: 2604,
      name: "David Guetta",
      artise_id: "bg0kDL3lUMzE6w",
      email: "",
      status: "0000-00-00 00:00:00",
      gender: null,
      contact_number: null,
      country: null,
      genres: null,
      followers: "26054193",
      bg_img:
        "https://i.scdn.co/image/ab6761610000e5ebf150017ca69c8793503c2d4f",
      md_img:
        "https://i.scdn.co/image/ab67616100005174f150017ca69c8793503c2d4f",
      sm_img:
        "https://i.scdn.co/image/ab6761610000f178f150017ca69c8793503c2d4f",
      spotify_id: "1Cs0zKBU1kc0i8ypK3B9ai",
      created_at: null,
      updated_at: null,
    },
    {
      id: 2637,
      name: "Imagine Dragons",
      artise_id: "k8TUL7YMo54g3t",
      email: "",
      status: "0000-00-00 00:00:00",
      gender: null,
      contact_number: null,
      country: null,
      genres: null,
      followers: "51463604",
      bg_img:
        "https://i.scdn.co/image/ab6761610000e5eb920dc1f617550de8388f368e",
      md_img:
        "https://i.scdn.co/image/ab67616100005174920dc1f617550de8388f368e",
      sm_img:
        "https://i.scdn.co/image/ab6761610000f178920dc1f617550de8388f368e",
      spotify_id: "53XhwfbYqKCa1cC15pYq2q",
      created_at: null,
      updated_at: null,
    },
    {
      id: 2645,
      name: "Green Day",
      artise_id: "LACEvVx1OVgD53",
      email: "",
      status: "0000-00-00 00:00:00",
      gender: null,
      contact_number: null,
      country: null,
      genres: null,
      followers: "14516732",
      bg_img:
        "https://i.scdn.co/image/ab6761610000e5eb6ff0cd5ef2ecf733804984bb",
      md_img:
        "https://i.scdn.co/image/ab676161000051746ff0cd5ef2ecf733804984bb",
      sm_img:
        "https://i.scdn.co/image/ab6761610000f1786ff0cd5ef2ecf733804984bb",
      spotify_id: "7oPftvlwr6VrsViSDV7fJY",
      created_at: null,
      updated_at: null,
    },
    {
      id: 2647,
      name: "One Direction",
      artise_id: "R4QcmeCZzL9CSA",
      email: "",
      status: "0000-00-00 00:00:00",
      gender: null,
      contact_number: null,
      country: null,
      genres: null,
      followers: "34094999",
      bg_img:
        "https://i.scdn.co/image/5bb443424a1ad71603c43d67f5af1a04da6bb3c8",
      md_img:
        "https://i.scdn.co/image/289c7f686f5b78ceeb224453cf9a15697a678a79",
      sm_img:
        "https://i.scdn.co/image/45741ba38b51130bb96e00c0e24d17ba311a9293",
      spotify_id: "4AK6F7OLvEQ5QYCBNiQWHq",
      created_at: null,
      updated_at: null,
    },
    {
      id: 3973,
      name: "Peso Pluma",
      artise_id: "c7QGaQy0yOUUws",
      email: "",
      status: "0000-00-00 00:00:00",
      gender: null,
      contact_number: null,
      country: null,
      genres: null,
      followers: "10463010",
      bg_img:
        "https://i.scdn.co/image/ab6761610000e5eb730e71d60e047f1061a9e697",
      md_img:
        "https://i.scdn.co/image/ab67616100005174730e71d60e047f1061a9e697",
      sm_img:
        "https://i.scdn.co/image/ab6761610000f178730e71d60e047f1061a9e697",
      spotify_id: "12GqGscKJx3aE4t07u7eVZ",
      created_at: null,
      updated_at: null,
    },
    {
      id: 4646,
      name: "Fleetwood Mac",
      artise_id: "kAvJQF4rrfy46J",
      email: "",
      status: "0000-00-00 00:00:00",
      gender: null,
      contact_number: null,
      country: null,
      genres: null,
      followers: "10858334",
      bg_img:
        "https://i.scdn.co/image/ab6761610000e5ebc8752dd511cda8c31e9daee8",
      md_img:
        "https://i.scdn.co/image/ab67616100005174c8752dd511cda8c31e9daee8",
      sm_img:
        "https://i.scdn.co/image/ab6761610000f178c8752dd511cda8c31e9daee8",
      spotify_id: "08GQAI4eElDnROBrJRGE0X",
      created_at: null,
      updated_at: null,
    },
    {
      id: 5426,
      name: "Lady Gaga",
      artise_id: "frhVbF5DYWynhl",
      email: "",
      status: "0000-00-00 00:00:00",
      gender: null,
      contact_number: null,
      country: null,
      genres: null,
      followers: "28818124",
      bg_img:
        "https://i.scdn.co/image/ab6761610000e5ebc8d3d98a1bccbe71393dbfbf",
      md_img:
        "https://i.scdn.co/image/ab67616100005174c8d3d98a1bccbe71393dbfbf",
      sm_img:
        "https://i.scdn.co/image/ab6761610000f178c8d3d98a1bccbe71393dbfbf",
      spotify_id: "1HY2Jd0NmPuamShAr6KMms",
      created_at: null,
      updated_at: null,
    },
    {
      id: 6861,
      name: "Sech",
      artise_id: "XG0w3kX7Jhs8mo",
      email: "",
      status: "0000-00-00 00:00:00",
      gender: null,
      contact_number: null,
      country: null,
      genres: null,
      followers: "11982288",
      bg_img:
        "https://i.scdn.co/image/ab6761610000e5ebe6399502553c796f40e11017",
      md_img:
        "https://i.scdn.co/image/ab67616100005174e6399502553c796f40e11017",
      sm_img:
        "https://i.scdn.co/image/ab6761610000f178e6399502553c796f40e11017",
      spotify_id: "77ziqFxp5gaInVrF2lj4ht",
      created_at: null,
      updated_at: null,
    },
    {
      id: 6929,
      name: "Sidhu Moose Wala",
      artise_id: "gUJZdwYTZHiWs9",
      email: "",
      status: "0000-00-00 00:00:00",
      gender: null,
      contact_number: null,
      country: null,
      genres: null,
      followers: "27357459",
      bg_img:
        "https://i.scdn.co/image/ab6761610000e5eb9973157bdaedef3f77ef8e13",
      md_img:
        "https://i.scdn.co/image/ab676161000051749973157bdaedef3f77ef8e13",
      sm_img:
        "https://i.scdn.co/image/ab6761610000f1789973157bdaedef3f77ef8e13",
      spotify_id: "4PULA4EFzYTrxYvOVlwpiQ",
      created_at: null,
      updated_at: null,
    },
  ]);

  const [quicks, setQuicks] = useState([
    {
      id: 328,
      name: "Lily Allen",
      artise_id: "5WufQTnlyDCBVa",
      email: "",
      status: "0000-00-00 00:00:00",
      gender: null,
      contact_number: null,
      country: null,
      genres: null,
      followers: "2011359",
      bg_img:
        "https://i.scdn.co/image/ab6761610000e5eb4816f55146bf03d294005165",
      md_img:
        "https://i.scdn.co/image/ab676161000051744816f55146bf03d294005165",
      sm_img:
        "https://i.scdn.co/image/ab6761610000f1784816f55146bf03d294005165",
      spotify_id: "13saZpZnCDWOI9D4IJhp1f",
      created_at: null,
      updated_at: null,
    },
    {
      id: 834,
      name: "Alligatoah",
      artise_id: "dxj0jM5CrQHg0Z",
      email: "",
      status: "0000-00-00 00:00:00",
      gender: null,
      contact_number: null,
      country: null,
      genres: null,
      followers: "1145784",
      bg_img:
        "https://i.scdn.co/image/ab6761610000e5eb489fdf3f409eed0c27751c64",
      md_img:
        "https://i.scdn.co/image/ab67616100005174489fdf3f409eed0c27751c64",
      sm_img:
        "https://i.scdn.co/image/ab6761610000f178489fdf3f409eed0c27751c64",
      spotify_id: "0r0R5nIjDY04TfxRM10Bcb",
      created_at: null,
      updated_at: null,
    },
    {
      id: 1006,
      name: "Kodak Black",
      artise_id: "FnB41jBlCwcct3",
      email: "",
      status: "0000-00-00 00:00:00",
      gender: null,
      contact_number: null,
      country: null,
      genres: null,
      followers: "10054758",
      bg_img:
        "https://i.scdn.co/image/ab6761610000e5eb70c05cf4dc9a7d3ffd02ba19",
      md_img:
        "https://i.scdn.co/image/ab6761610000517470c05cf4dc9a7d3ffd02ba19",
      sm_img:
        "https://i.scdn.co/image/ab6761610000f17870c05cf4dc9a7d3ffd02ba19",
      spotify_id: "46SHBwWsqBkxI7EeeBEQG7",
      created_at: null,
      updated_at: null,
    },
    {
      id: 1124,
      name: "Lay Bankz",
      artise_id: "CvtD8ugdCSvBJP",
      email: "",
      status: "0000-00-00 00:00:00",
      gender: null,
      contact_number: null,
      country: null,
      genres: null,
      followers: "121886",
      bg_img:
        "https://i.scdn.co/image/ab6761610000e5eb07942dc3dd27e45db144ba76",
      md_img:
        "https://i.scdn.co/image/ab6761610000517407942dc3dd27e45db144ba76",
      sm_img:
        "https://i.scdn.co/image/ab6761610000f17807942dc3dd27e45db144ba76",
      spotify_id: "4OVbrPbhvK46A1uXTU1u5F",
      created_at: null,
      updated_at: null,
    },
    {
      id: 1335,
      name: "Sada Baby",
      artise_id: "gB8io8H7sQpETI",
      email: "",
      status: "0000-00-00 00:00:00",
      gender: null,
      contact_number: null,
      country: null,
      genres: null,
      followers: "494622",
      bg_img:
        "https://i.scdn.co/image/ab6761610000e5eb0ca05713d850b4ae0ee831bf",
      md_img:
        "https://i.scdn.co/image/ab676161000051740ca05713d850b4ae0ee831bf",
      sm_img:
        "https://i.scdn.co/image/ab6761610000f1780ca05713d850b4ae0ee831bf",
      spotify_id: "2JSwnwAT1BupAQkhqcRCUw",
      created_at: null,
      updated_at: null,
    },
    {
      id: 1750,
      name: "Carpenter Brut",
      artise_id: "BhwpUgzMBxf0bZ",
      email: "",
      status: "0000-00-00 00:00:00",
      gender: null,
      contact_number: null,
      country: null,
      genres: null,
      followers: "407688",
      bg_img:
        "https://i.scdn.co/image/ab6761610000e5eb745e09d713e0bfe2df2e2a35",
      md_img:
        "https://i.scdn.co/image/ab67616100005174745e09d713e0bfe2df2e2a35",
      sm_img:
        "https://i.scdn.co/image/ab6761610000f178745e09d713e0bfe2df2e2a35",
      spotify_id: "1l2oLiukA9i5jEtIyNWIEP",
      created_at: null,
      updated_at: null,
    },
    {
      id: 1848,
      name: "Caamp",
      artise_id: "0BsKnQv6Y7X782",
      email: "",
      status: "0000-00-00 00:00:00",
      gender: null,
      contact_number: null,
      country: null,
      genres: null,
      followers: "544399",
      bg_img:
        "https://i.scdn.co/image/ab6761610000e5eb14a8f509151ea8cbba5c75d5",
      md_img:
        "https://i.scdn.co/image/ab6761610000517414a8f509151ea8cbba5c75d5",
      sm_img:
        "https://i.scdn.co/image/ab6761610000f17814a8f509151ea8cbba5c75d5",
      spotify_id: "0wyMPXGfOuQzNR54ujR9Ix",
      created_at: null,
      updated_at: null,
    },
    {
      id: 2090,
      name: "Cristian Castro",
      artise_id: "xLqL903cybwi3g",
      email: "",
      status: "0000-00-00 00:00:00",
      gender: null,
      contact_number: null,
      country: null,
      genres: null,
      followers: "3304417",
      bg_img:
        "https://i.scdn.co/image/45025bd1014527e8f113b22fa647da7a142c3d6c",
      md_img:
        "https://i.scdn.co/image/08e7785dae72d4730b79232aebd448962e7f2e0a",
      sm_img:
        "https://i.scdn.co/image/94f061c54cad2a0bdd69845a04e7f2d8cedae529",
      spotify_id: "2AZOALDIBORfbzKTuliwdJ",
      created_at: null,
      updated_at: null,
    },
    {
      id: 2194,
      name: "The Crystals",
      artise_id: "zu2cfd6M4Fgjet",
      email: "",
      status: "0000-00-00 00:00:00",
      gender: null,
      contact_number: null,
      country: null,
      genres: null,
      followers: "115812",
      bg_img:
        "https://i.scdn.co/image/ce8e36caccc0fe528b69eae944e3a200ff46a788",
      md_img:
        "https://i.scdn.co/image/9d13645907a8c45cfcd302c44e65da7efaf9d1b7",
      sm_img:
        "https://i.scdn.co/image/87315465dc20f5fdda41d849519eeb7ce777b57b",
      spotify_id: "7rewR1TVjhisjI6gauUamf",
      created_at: null,
      updated_at: null,
    },
    {
      id: 2235,
      name: "The Cataracs",
      artise_id: "5aqTHA8dBAC4ia",
      email: "",
      status: "0000-00-00 00:00:00",
      gender: null,
      contact_number: null,
      country: null,
      genres: null,
      followers: "109172",
      bg_img:
        "https://i.scdn.co/image/ab67616d0000b273ea79dc8a9e3223fe00685519",
      md_img:
        "https://i.scdn.co/image/ab67616d00001e02ea79dc8a9e3223fe00685519",
      sm_img:
        "https://i.scdn.co/image/ab67616d00004851ea79dc8a9e3223fe00685519",
      spotify_id: "7C64wNX3howEFZjAYRKsfP",
      created_at: null,
      updated_at: null,
    },
    {
      id: 2528,
      name: "Jaime Córdoba",
      artise_id: "GaG7T58BTc40ZN",
      email: "",
      status: "0000-00-00 00:00:00",
      gender: null,
      contact_number: null,
      country: null,
      genres: null,
      followers: "6544",
      bg_img:
        "https://i.scdn.co/image/ab6761610000e5eb7843e6052711c14f28bc3652",
      md_img:
        "https://i.scdn.co/image/ab676161000051747843e6052711c14f28bc3652",
      sm_img:
        "https://i.scdn.co/image/ab6761610000f1787843e6052711c14f28bc3652",
      spotify_id: "6xj8yyeOSv0R8IrC9IawVa",
      created_at: null,
      updated_at: null,
    },
    {
      id: 2612,
      name: "Darlene Love",
      artise_id: "sYqd3WRnAly7fB",
      email: "",
      status: "0000-00-00 00:00:00",
      gender: null,
      contact_number: null,
      country: null,
      genres: null,
      followers: "57081",
      bg_img:
        "https://i.scdn.co/image/d7d6a7209389a3985020c999b5584bf020772b24",
      md_img:
        "https://i.scdn.co/image/deadec5dc3301a503b6987b197af912c960dd7b4",
      sm_img:
        "https://i.scdn.co/image/6364d702e1a26e6d8b487e7e324e2cdadbd8301f",
      spotify_id: "391oLRVmoTkumiN79HkTWu",
      created_at: null,
      updated_at: null,
    },
    {
      id: 3042,
      name: "DANGERDOOM",
      artise_id: "H9v2EqHf4vpp3b",
      email: "",
      status: "0000-00-00 00:00:00",
      gender: null,
      contact_number: null,
      country: null,
      genres: null,
      followers: "252001",
      bg_img:
        "https://i.scdn.co/image/135934b2b384817e7727d303c23a22dfe84ace90",
      md_img:
        "https://i.scdn.co/image/03e3c1a62c1e4a9dfac7128f3a4a487fd2027ca9",
      sm_img:
        "https://i.scdn.co/image/0fe2fa0d70f965b2389cf6f658ee29950a9fbf17",
      spotify_id: "0b3fYxnG6tlR0zLtBJd8DF",
      created_at: null,
      updated_at: null,
    },
    {
      id: 3142,
      name: "That Handsome Devil",
      artise_id: "i8s8WYDde4Tc9P",
      email: "",
      status: "0000-00-00 00:00:00",
      gender: null,
      contact_number: null,
      country: null,
      genres: null,
      followers: "99728",
      bg_img:
        "https://i.scdn.co/image/ab67616d0000b27384984d43bc8fc4af7db87d83",
      md_img:
        "https://i.scdn.co/image/ab67616d00001e0284984d43bc8fc4af7db87d83",
      sm_img:
        "https://i.scdn.co/image/ab67616d0000485184984d43bc8fc4af7db87d83",
      spotify_id: "3MIk8tAIzBQ5iZWmlVLCCT",
      created_at: null,
      updated_at: null,
    },
    {
      id: 3929,
      name: "Thomas Doherty",
      artise_id: "jLC0YRBCRfLsth",
      email: "",
      status: "0000-00-00 00:00:00",
      gender: null,
      contact_number: null,
      country: null,
      genres: null,
      followers: "22180",
      bg_img:
        "https://i.scdn.co/image/ab67616d0000b273f43ed24f0ebdcb4d751b3f4b",
      md_img:
        "https://i.scdn.co/image/ab67616d00001e02f43ed24f0ebdcb4d751b3f4b",
      sm_img:
        "https://i.scdn.co/image/ab67616d00004851f43ed24f0ebdcb4d751b3f4b",
      spotify_id: "4QS6MMKct3F3LkN7cr6vHg",
      created_at: null,
      updated_at: null,
    },
    {
      id: 3988,
      name: "Edgardo Nuñez",
      artise_id: "g5hWohpSuxmg9Z",
      email: "",
      status: "0000-00-00 00:00:00",
      gender: null,
      contact_number: null,
      country: null,
      genres: null,
      followers: "1271820",
      bg_img:
        "https://i.scdn.co/image/ab6761610000e5ebdac2933c3e520f83577701a1",
      md_img:
        "https://i.scdn.co/image/ab67616100005174dac2933c3e520f83577701a1",
      sm_img:
        "https://i.scdn.co/image/ab6761610000f178dac2933c3e520f83577701a1",
      spotify_id: "0mA4dkNGiN4fqTBi2SLlAv",
      created_at: null,
      updated_at: null,
    },
    {
      id: 4165,
      name: "Eddie Flint",
      artise_id: "bEEpQteceF9cRj",
      email: "",
      status: "0000-00-00 00:00:00",
      gender: null,
      contact_number: null,
      country: null,
      genres: null,
      followers: "45867",
      bg_img:
        "https://i.scdn.co/image/ab6761610000e5eb3f537dd209aa33cdde008873",
      md_img:
        "https://i.scdn.co/image/ab676161000051743f537dd209aa33cdde008873",
      sm_img:
        "https://i.scdn.co/image/ab6761610000f1783f537dd209aa33cdde008873",
      spotify_id: "1OiaW9PZCUJlkINotRihrA",
      created_at: null,
      updated_at: null,
    },
    {
      id: 4334,
      name: "Ayesha Erotica",
      artise_id: "Mw7PUaMilSAfZu",
      email: "",
      status: "0000-00-00 00:00:00",
      gender: null,
      contact_number: null,
      country: null,
      genres: null,
      followers: "17189",
      bg_img:
        "https://i.scdn.co/image/ab6761610000e5eb0bb8b4aff4692dd0912d7fe4",
      md_img:
        "https://i.scdn.co/image/ab676161000051740bb8b4aff4692dd0912d7fe4",
      sm_img:
        "https://i.scdn.co/image/ab6761610000f1780bb8b4aff4692dd0912d7fe4",
      spotify_id: "7gQJXKyZX1Wwqpd82lB9Xy",
      created_at: null,
      updated_at: null,
    },
    {
      id: 4477,
      name: "Emerson, Lake & Palmer",
      artise_id: "HTfrQgBKyVlLfF",
      email: "",
      status: "0000-00-00 00:00:00",
      gender: null,
      contact_number: null,
      country: null,
      genres: null,
      followers: "1044764",
      bg_img:
        "https://i.scdn.co/image/492cf7afbe3a7be6d6d2bda5c71a52e3cc1c9d3d",
      md_img:
        "https://i.scdn.co/image/b08d44bef3e4d8cb3589acc61389a9d62098be47",
      sm_img:
        "https://i.scdn.co/image/0cbd0b45bdf8659a6d73304c0ae44d8b0dca221d",
      spotify_id: "0nCiidE5GgDrc5kWN3NZgZ",
      created_at: null,
      updated_at: null,
    },
    {
      id: 5111,
      name: "Florian Christl",
      artise_id: "I0QUrWT1LZm2LJ",
      email: "",
      status: "0000-00-00 00:00:00",
      gender: null,
      contact_number: null,
      country: null,
      genres: null,
      followers: "28319",
      bg_img:
        "https://i.scdn.co/image/ab6761610000e5eb6cc0f8cd1833794b7243ff55",
      md_img:
        "https://i.scdn.co/image/ab676161000051746cc0f8cd1833794b7243ff55",
      sm_img:
        "https://i.scdn.co/image/ab6761610000f1786cc0f8cd1833794b7243ff55",
      spotify_id: "4yanWaefFUJnIUV0aITdvV",
      created_at: null,
      updated_at: null,
    },
    {
      id: 5893,
      name: "GoldFord",
      artise_id: "1dEU8ylV2bIdQA",
      email: "",
      status: "0000-00-00 00:00:00",
      gender: null,
      contact_number: null,
      country: null,
      genres: null,
      followers: "47783",
      bg_img:
        "https://i.scdn.co/image/ab6761610000e5eb6b31e93d61c2f4aa426a93ce",
      md_img:
        "https://i.scdn.co/image/ab676161000051746b31e93d61c2f4aa426a93ce",
      sm_img:
        "https://i.scdn.co/image/ab6761610000f1786b31e93d61c2f4aa426a93ce",
      spotify_id: "4I2QW85rkIhCRRZt1kuBqS",
      created_at: null,
      updated_at: null,
    },
    {
      id: 6272,
      name: "Rupert Holmes",
      artise_id: "ArAP7iVwEKGJUI",
      email: "",
      status: "0000-00-00 00:00:00",
      gender: null,
      contact_number: null,
      country: null,
      genres: null,
      followers: "93359",
      bg_img:
        "https://i.scdn.co/image/e1dc3194e0bdb35d1c0200eb50f9dc6dcb301888",
      md_img:
        "https://i.scdn.co/image/508083629a80d450fb30581351b47e844a54031a",
      sm_img:
        "https://i.scdn.co/image/9e51ae0447e1cb74e0747744913f4b817037777c",
      spotify_id: "0TqIPD4IS1w4e30R38B3vj",
      created_at: null,
      updated_at: null,
    },
    {
      id: 6424,
      name: "Andrew Holdsworth",
      artise_id: "zSpPHtygsH4RFd",
      email: "",
      status: "0000-00-00 00:00:00",
      gender: null,
      contact_number: null,
      country: null,
      genres: null,
      followers: "5114",
      bg_img:
        "https://i.scdn.co/image/ab6761610000e5ebc1d498ebb0c75ff75aceb161",
      md_img:
        "https://i.scdn.co/image/ab67616100005174c1d498ebb0c75ff75aceb161",
      sm_img:
        "https://i.scdn.co/image/ab6761610000f178c1d498ebb0c75ff75aceb161",
      spotify_id: "3nqYPo90eQVpSZjT4Y85An",
      created_at: null,
      updated_at: null,
    },
    {
      id: 6628,
      name: "Sam Haft",
      artise_id: "9jvg542vMtmmt1",
      email: "",
      status: "0000-00-00 00:00:00",
      gender: null,
      contact_number: null,
      country: null,
      genres: null,
      followers: "18026",
      bg_img:
        "https://i.scdn.co/image/ab6761610000e5eb9aacb1a58f28698b98d2cd77",
      md_img:
        "https://i.scdn.co/image/ab676161000051749aacb1a58f28698b98d2cd77",
      sm_img:
        "https://i.scdn.co/image/ab6761610000f1789aacb1a58f28698b98d2cd77",
      spotify_id: "3osxpNwDgRAPs3aZZNsdV8",
      created_at: null,
      updated_at: null,
    },
    {
      id: 7095,
      name: "STRFKR",
      artise_id: "ognck5qasnHVDm",
      email: "",
      status: "0000-00-00 00:00:00",
      gender: null,
      contact_number: null,
      country: null,
      genres: null,
      followers: "438670",
      bg_img:
        "https://i.scdn.co/image/ab6761610000e5eb03db121cc01446696be24014",
      md_img:
        "https://i.scdn.co/image/ab6761610000517403db121cc01446696be24014",
      sm_img:
        "https://i.scdn.co/image/ab6761610000f17803db121cc01446696be24014",
      spotify_id: "2Tz1DTzVJ5Gyh8ZwVr6ekU",
      created_at: null,
      updated_at: null,
    },
  ]);

  return (
    <SafeAreaView style={styles.AndroidSafeArea}>
      <View style={{ paddingTop:10, paddingLeft:5 }}>
        <View style={styles.topArea}>
          <View style={styles.profileImg}>
            <Image
              source={require("../../assets/img/boyW.jpeg")}
              style={{ width: 40, height:40, borderRadius: 50 }}
            />
            <View style={styles.profileImgDesc}>
              <Text numberOfLines={1} style={styles.moreActive}>Kingsharp Nkansah</Text>
              <Text style={styles.lessActive}>Good Morning</Text>
            </View>
          </View>
          <View style={styles.topAreaIcons}>
            <Ionicons
              name="search-outline"
              size={25}
              color="#686779"
              style={{ marginRight: 20 }}
            />
            <Ionicons name="notifications-outline" size={25} color="#686779" />
          </View>
        </View>
        <ScrollView style={{ paddingBottom:100}} showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
          <View style={styles.quickpick}>
            <Text style={styles.lessActive}>Effortless Choose</Text>
            <Text style={styles.moreActive}>Quick pick</Text>
            <ScrollView
              style={styles.quickpickCarosel}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              <View style={{ marginRight: 20 }}>
                {quicks.map((ele, index) => {
                  if (index < 3) {
                    return (
                      <View
                        style={{ flexDirection: "row", alignItems: "center" }}
                      >
                        <View style={styles.profileImg} key={index}>
                          <Image
                            source={{ uri: `${ele.bg_img}` }}
                            style={{ width: 50, height: 50, borderRadius: 10 }}
                          />
                          <View style={styles.profileImgDesc}>
                            <Text style={styles.moreActive}>{ele.name}</Text>
                            <Text style={styles.lessActive}>
                              {ele.followers} followers{" "}
                            </Text>
                          </View>
                        </View>
                        <Entypo
                          name="dots-three-vertical"
                          size={20}
                          color="#686779"
                        />
                      </View>
                    );
                  }
                })}
              </View>
              <View style={{ marginRight: 40 }}>
                {quicks.map((ele, index) => {
                  if (index > 3 && index < 7) {
                    return (
                      <View
                        style={{ flexDirection: "row", alignItems: "center" }}
                      >
                        <View style={styles.profileImg} key={index}>
                          <Image
                            source={{ uri: `${ele.bg_img}` }}
                            style={{ width: 50, height: 50, borderRadius: 10 }}
                          />
                          <View style={styles.profileImgDesc}>
                            <Text style={styles.moreActive}>{ele.name}</Text>
                            <Text style={styles.lessActive}>
                              {ele.followers} followers{" "}
                            </Text>
                          </View>
                        </View>
                        <Entypo
                          name="dots-three-vertical"
                          size={20}
                          color="#686779"
                        />
                      </View>
                    );
                  }
                })}
              </View>
              <View style={{ marginRight: 40 }}>
                {quicks.map((ele, index) => {
                  if (index > 7 && index < 11) {
                    return (
                      <View
                        style={{ flexDirection: "row", alignItems: "center" }}
                      >
                        <View style={styles.profileImg} key={index}>
                          <Image
                            source={{ uri: `${ele.bg_img}` }}
                            style={{ width: 50, height: 50, borderRadius: 10 }}
                          />
                          <View style={styles.profileImgDesc}>
                            <Text style={styles.moreActive}>{ele.name}</Text>
                            <Text style={styles.lessActive}>
                              {ele.followers} followers{" "}
                            </Text>
                          </View>
                        </View>
                        <Entypo
                          name="dots-three-vertical"
                          size={20}
                          color="#686779"
                        />
                      </View>
                    );
                  }
                })}
              </View>
            </ScrollView>
          </View>

          <View style={styles.quickpick}>
            <Text style={styles.lessActive}>Listen Again</Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Text style={styles.moreActive}>Our Best Artist</Text>
              <Entypo
                style={{}}
                name="chevron-with-circle-right"
                size={20}
                color="#686779"
              />
            </View>

            <ScrollView
              style={styles.quickpickCarosel}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              {trends &&
                trends.map((ele, index) => {
                  return (
                <ArtiseCard image={ele.bg_img} name={ele.name} index={index} followers={ele.followers} navigation={navigation} spotifyId={ele.spotify_id} mainId={ele.artise_id}/>
                  );
                })}
            </ScrollView>
          </View>


          <View style={styles.explore}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Text
                style={{
                  color: "white",
                  fontSize: 25,
                  marginTop: 10,
                  fontWeight: "500",
                }}
              >
              Categories
              </Text>
              <Text
                style={{
                  color: "#686779",
                  fontSize: 15,
                  marginTop: 10,
                  fontWeight: "500",
                }}
              >
              See All
              </Text>
            
            </View>

            <View style={styles.categoriesCard}>

            </View>
          </View>
          
          

        </ScrollView>
      </View>
     
    </SafeAreaView>
    
  );
}

const styles = StyleSheet.create({
  AndroidSafeArea: {
    flex: 1,
    backgroundColor: "#141319",
    height:'auto',
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  },
  topArea: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  topAreaIcons: {
    flexDirection: "row",
  },
  lessActive: {
    color: "#686779",
    fontSize: 14,
    marginBottom: 8,
  },
  moreActive: {
    color: "white",
    fontSize: 20,
    // marginBottom: 8,
    fontWeight: "500",
    textTransform: "capitalize",
  },
  quickpick: {
    marginTop: 20,
  },
  quickpickCarosel: {
    flexDirection: "row",
    marginVertical: 12 / 2,
    marginHorizontal: 12 / 2,
  },
  text: {
    color: "white",
  },
  profileImg: {
    width: "auto",
    height: 64,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    display: "flex",
  },
  profileImgDesc: {
    width: 150,
  },
  artise: {
    gap: 10,
    flexDirection: "column",
    alignItems: "center",
    marginRight: 15,
  },

  // explore
  explore: {},
  categoriesCard: {},
});

export default LandingPage;
