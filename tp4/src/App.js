import React, {useReducer, useState} from 'react'
import './App.css';

const formReducer = (state, event) => {
    return {
        ...state,
        [event.name]: event.value
    }
}

function App () {

    const [formData, setFormData] = useReducer(formReducer, {});
    const [submitting, setSubmitting] = useState(false);

    const handleSubmit = event => {
        event.preventDefault();
        setSubmitting(true);
    }

    const handleChange = event => {
        setFormData({
            name: event.target.name,
            value: event.target.value,
        })
    }


    return (
        <div className="app">
            <div className="form">
                <form onSubmit={handleSubmit}>
                    <div className="title">
                        <h1>Biodata</h1>
                    </div>

                    <div className="nama-lengkap">
                        <label>
                            <p>Nama Lengkap</p>
                            <input type="text" name="Nama" onChange={handleChange} />
                        </label>
                    </div>

                    <div className="tanggal-lahir">
                        <label>
                            <p>Tanggal Lahir</p>
                            <input type="date" name="Tanggal Lahir" onChange={handleChange} />
                        </label>
                    </div>

                    <div className="jenis-kelamin">
                        <label>
                            <p>Jenis Kelamin</p>
                            <input type="radio" name="Jenis Kelamin" value="Laki - Laki" onChange={handleChange} />Laki - Laki
                            <input type="radio" name="Jenis Kelamin" value="Perempuan" onChange={handleChange} />Perempuan
                            <input type="radio" name="Jenis Kelamin" value="Lainnya" onChange={handleChange} />Lainnya
                        </label>
                    </div>

                    <div className="hobi">
                        <label>
                            <p>Hobi</p>
                            <input type="checkbox" name="Hobi" value="Ngoding" onChange={handleChange} />Ngoding
                            <input type="checkbox" name="Hobi" value="Rebahan" onChange={handleChange} />Rebahan
                            <input type="checkbox" name="Hobi" value="Melamun" onChange={handleChange} />Melamun
                            <input type="checkbox" name="Hobi" value="Membaca Buku" onChange={handleChange} />Membaca Buku
                            <input type="checkbox" name="Hobi" value="Menonton Youtube" onChange={handleChange} />Menonton Youtube
                            <input type="checkbox" name="Hobi" value="Mendengarkan Musik" onChange={handleChange} />Mendengarkan Musik
                            <input type="checkbox" name="Hobi" value="Lainnya" onChange={handleChange} />Lainnya
                        </label>
                    </div>

                    <div className="agama">
                        <label>
                            <p>Agama</p>
                            <select name="Agama" onChange={handleChange}>
                                <option value="Islam">Islam</option>
                                <option value="Kristen">Kristen</option>
                                <option value="Katholik">Katholik</option>
                                <option value="Hindu">Hindu</option>
                                <option value="Buddha">Buddha</option>
                                <option value="Konghucu">Konghucu</option>
                                <option value="Lainnya">Lainnya</option>
                            </select>
                        </label>
                    </div>

                    <div className="pesan">
                        <label>
                            <p>Pesan</p>
                            <textarea name="Pesan" rows="10" cols="50" onChange={handleChange}></textarea>
                        </label>
                    </div>

                    <div className="submit">
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </div><br />

            {submitting &&
                <div>
                    <table className="table" rules="rows">
                        <thead>
                            <tr>
                              <th>Label</th>
                              <th>Value</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Object.entries(formData).map(([name, value]) => (
                                <tr>
                                    <th key={name}>{name}</th>
                                    <th key={name}>{value.toString()}</th>
                                </tr>
                            ))}              
                        </tbody>
                    </table>
                </div>
            }
        </div>
    );
}

export default App;
