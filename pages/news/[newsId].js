// our-domain.com/news/*something-dynamic*
import { useRouter } from "next/router"

export default function DetailPage() {
    const router = useRouter();

    const newsId = router.query.newsId;

    //could send a request to the backend API
    //to fetch the news item with newsId

    return <h1>The Detail Page</h1>
};