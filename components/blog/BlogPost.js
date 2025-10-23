
import { useEffect, useState, useRef } from "react"
import data from "../../util/blog.json"
import BlogCard1 from "./BlogCard1"
import Pagination from "./Pagination"
import { baseURL } from "@/auth/auth";
import { useRouter } from "next/navigation";

export default function BlogPost({ style, showItem, showPagination }) {
    let [currentPage, setCurrentPage] = useState(1)
    let showLimit = showItem,
        paginationItem = 4

    let [pagination, setPagination] = useState([])
    let [limit, setLimit] = useState(showLimit)
    let [pages, setPages] = useState(Math.ceil(data.length / limit))

    useEffect(() => {
        cratePagination()
    }, [limit, pages, data.length])

    const cratePagination = () => {
        // set pagination
        let arr = new Array(Math.ceil(data.length / limit))
            .fill()
            .map((_, idx) => idx + 1)

        setPagination(arr)
        setPages(Math.ceil(data.length / limit))
    }

    const startIndex = currentPage * limit - limit
    const endIndex = startIndex + limit
    const getPaginatedProducts = data.slice(startIndex, endIndex)


    let start = Math.floor((currentPage - 1) / paginationItem) * paginationItem
    let end = start + paginationItem
    const getPaginationGroup = pagination.slice(start, end)

    const next = () => {
        setCurrentPage((page) => page + 1)
    }

    const prev = () => {
        setCurrentPage((page) => page - 1)
    }

    const handleActive = (item) => {
        setCurrentPage(item)
    }



    const [newsData, setNewsData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const cachedData = useRef([]);
    const router = useRouter();

    useEffect(() => {
        const storedData = localStorage.getItem("nData");
        if (storedData) {
            const parsedData = JSON.parse(storedData);
            setNewsData(parsedData);
            cachedData.current = parsedData;
        } else {
            fetchNewsData();
        }
        const handleScroll = () => {
            if (window.scrollY === 0 && cachedData.current.length === 0) {
                fetchNewsData();
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const fetchNewsData = async () => {
        setIsLoading(true);
        const res = await fetch(`${baseURL}/wp-json/wp/v2/posts?per_page=100`, {
            method: "GET",
            headers: { "Content-Type": "application/json" },
        });
        const data = await res.json();
        setNewsData(data);
        cachedData.current = data;
        localStorage.setItem("nData", JSON.stringify(data));
        setIsLoading(false);
    };


    return (
        <>

            {getPaginatedProducts.length === 0 && (
                <h3>No Products Found </h3>
            )}

            {newsData.map((news, i) => (
                <BlogCard1 key={i} item={news} />
            ))}

        </>
    )
}