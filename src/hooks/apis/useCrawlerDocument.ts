import { useQuery } from "@tanstack/react-query";

// API 응답 타입 (필요에 따라 수정)
interface CrawlerDocumentResponse {
  count: number;
  documents: {
    source: string;
    preview: string;
  }[];
}

// API 호출 함수
const fetchCrawlerDocument = async (
  params: number
): Promise<CrawlerDocumentResponse> => {
  const response = await fetch(
    `https://${process.env.NEXT_PUBLIC_API_URL}/crawler/documents?limit=${params}`
  );
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return response.json();
};

// TanStack Query 훅
export const useCrawlerDocument = (params?: any) => {
  return useQuery<CrawlerDocumentResponse, Error>({
    queryKey: ["crawlerDocument", params],
    queryFn: () => fetchCrawlerDocument(params),
    enabled: !!params, // params가 있을 때만 쿼리 실행
  });
};

// Successful response example
/* {
  "count": 5,
  "documents": [
    {
      "source": "https://react.dev/learn",
      "preview": "map()\nfunction to transform an array of products into an array of\n<li>\nitems:\nconst\nlistItems\n=\nproducts\n.\nmap\n(\nproduct\n=>\n<\nli\nkey\n=\n{\nproduct\n.\nid\n}\n>\n{\nproduct\n.\ntitle\n}\n</\nli\n>\n)\n;\nreturn\n(\n<\nul\n>\n{\nlistItems\n}\n</\nul\n>\n)\n;\nNotice how\n<li>\nhas a\nkey\nattribute. For each item in a list, you should"
    },
    {
      "source": "https://react.dev/learn",
      "preview": "Have a look at the result:\nApp.js\nApp.js\nReset\nFork\nfunction\nMyButton\n(\n)\n{\nreturn\n(\n<\nbutton\n>\nI'm a button\n</\nbutton\n>\n)\n;\n}\nexport\ndefault\nfunction\nMyApp\n(\n)\n{\nreturn\n(\n<\ndiv\n>\n<\nh1\n>\nWelcome to my app\n</\nh1\n>\n<\nMyButton\n/>\n</\ndiv\n>\n)\n;\n}\nShow more\nThe\nexport default\nkeywords specify the main com"
    },
    {
      "source": "https://en.wikipedia.org/wiki/Web_crawler",
      "preview": "Archived\n7 November 2007 at the\nWayback Machine\n.\n^\nKoster, M. (1993).\nGuidelines for robots writers\nArchived\n22 April 2005 at the\nWayback Machine\n.\n^\nBaeza-Yates, R. and Castillo, C. (2002).\nBalancing volume, quality and freshness in Web crawling\n. In Soft Computing Systems – Design, Management and"
    },
    {
      "source": "https://react.dev/learn",
      "preview": "src={user.imageUrl}\nreads the JavaScript\nuser.imageUrl\nvariable value, and then passes that value as the\nsrc\nattribute:\nreturn\n(\n<\nimg\nclassName\n=\n\"avatar\"\nsrc\n=\n{\nuser\n.\nimageUrl\n}\n/>\n)\n;\nYou can put more complex expressions inside the JSX curly braces too, for example,\nstring concatenation\n:\nApp.j"
    },
    {
      "source": "https://en.wikipedia.org/wiki/Web_crawler",
      "preview": "Toggle the table of contents\nWeb crawler\n47 languages\nAfrikaans\nالعربية\nAzərbaycanca\nBoarisch\nCatalà\nČeština\nCymraeg\nالدارجة\nDeutsch\nEesti\nΕλληνικά\nEspañol\nEuskara\nفارسی\nFrançais\n한국어\nՀայերեն\nHrvatski\nBahasa Indonesia\nInterlingua\nItaliano\nעברית\nLatviešu\nLietuvių\nMagyar\nBahasa Melayu\nNederlands\nNeders"
    }
  ]
} */
