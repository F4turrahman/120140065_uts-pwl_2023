import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditUser = () => {
  const [nama_barang, setNamaBarang] = useState("");
  const [jumlah, setJumlah] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    getBarangById();
  });

  const updateBarang = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:3000/barang/${id}`, {
        nama_barang,
        jumlah
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const getBarangById = async () => {
    const response = await axios.get(`http://localhost:3000/barang/${id}`);
    setNamaBarang(response.data.nama_barang);
    setJumlah(response.data.jumlah);
  };

  return (
    <div className="columns mt-5 is-centered">
      <div className="column is-half">
        <form onSubmit={updateBarang}>
          <div className="field">
            <label className="label">Nama Barang</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={nama_barang}
                onChange={(e) => setNamaBarang(e.target.value)}
                placeholder="Nama Barang"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Jumlah</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={jumlah}
                onChange={(e) => setJumlah(e.target.value)}
                placeholder="Jumlah"
              />
            </div>
          </div>
          <div className="field">
            <button type="submit" className="button is-success">
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditUser;
