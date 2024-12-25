import React, { useEffect, useState } from "react";
import { db } from "./firebase";
import { collection, getDocs } from "firebase/firestore";
import { Link } from "react-router-dom";
import Card from "./Card";
import NavBar from "./NavBar";

const Home = () => {
    const [items, setItems] = useState([]);
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Fetch items
                const itemsSnapshot = await getDocs(collection(db, "items"));
                const itemsData = itemsSnapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }));

                // Fetch categories
                const categoriesSnapshot = await getDocs(collection(db, "categories"));
                const categoriesData = categoriesSnapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }));

                setItems(itemsData);
                setCategories(categoriesData);
            } catch (error) {
                console.error("Error fetching data: ", error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <NavBar />
            <div className="container mt-5">
                {/* Categories Section */}

                <div className="row mb-5">
                    {categories.map((category) => (
                        <div key={category.id} className="col-lg-2 col-md-4 col-sm-3 col-12 mb-4">
                            <div className="card bg-light text-dark">
                                <Link to={`/category/${category.name}`} style={{ textDecoration: "none" }}>
                                    <img
                                        src={category.image || "https://via.placeholder.com/150"}
                                        className="card-img-top"
                                        alt={category.name}
                                        style={{ objectFit: "cover", height: "180px" }}
                                    />
                                    <div className="card-body text-center">
                                        <h5 className="card-title">{category.name}</h5>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Items Section */}
                <h2 className="mb-4">Items</h2>
                <div className="row">
                    {items.map((item) => (
                        <div key={item.id} className="col-lg-3 col-md-4 col-sm-6 col-12 mb-4 h-80 " >
                            <Card
                                title={item.title}
                                description={item.description}
                                price={item.price}
                                image={item.image}
                                rating={item.rating}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Home;
