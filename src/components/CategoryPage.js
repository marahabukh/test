import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "./firebase";
import { collection, getDocs, query, where } from "firebase/firestore";
import Card from "./Card";
import NavBar from "./NavBar";

const CategoryPage = () => {
    const { categoryName } = useParams(); // Get the category name from the URL
    const [items, setItems] = useState([]);

    useEffect(() => {
        const fetchItemsByCategory = async () => {
            try {
                // Query Firestore for items with the matching category
                const q = query(
                    collection(db, "items"),
                    where("category", "==", categoryName)
                );
                const querySnapshot = await getDocs(q);
                const itemsData = querySnapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }));
                setItems(itemsData);
            } catch (error) {
                console.error("Error fetching category items: ", error);
            }
        };

        fetchItemsByCategory();
    }, [categoryName]);

    return (
        <div>
            <NavBar />
            <div className="container mt-3">
                <div className="row">
                    {items.map((item) => (
                        <div key={item.id} className="col-lg-3 col-md-4 col-sm-6 col-12 mb-4">
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

export default CategoryPage;
