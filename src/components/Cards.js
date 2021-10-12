import React, { useState, useEffect } from "react";
import "../css/bootstrap.min.css";
import "../css/body.css";
import axios from "axios";
import {Grid, Box} from '@material-ui/core';
export default function Cards() {
    const URL_GET = "https://localhost/cotizador/ConexionPHP/servi.php";
    const [data, setData] = useState([]);
    const obtenerData = async () => {
        await axios.get(URL_GET)
            .then(response => {
                setData(response.data);
            })
    }
    useEffect(() => {
        obtenerData();
    }, []);
    return (
        <Grid container spacing={3} columns={{xs: 1, sm: 2, md: 3  }}>
            {data.map(
                (elem) => (
                    <Grid item xs ={6} md={4}>
                        <Box border={1} >
                        <div class="card-header">
                            {elem.nombreservicio}
                        </div>
                        <div class="card-body">
                            <p class="card-text">{elem.informacion}</p>
                        </div>
                        <ul className="list-group list-group-flush">
                            <li class="list-group-item">Precio : ${elem.precio}</li>
                        </ul>
                        {/* <a href="#" class="btn btn-primary">Añadir</a> */}
                        <button type="button" class="btn btn-primary">Añadir</button>
                        </Box>

                    </Grid>

                )
            )
            }
        </Grid>
    );
}