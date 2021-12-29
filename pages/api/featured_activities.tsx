import ReactDOMServer from "react-dom/server";
import FeaturedActivities from "../../components/frontend/sections/activities/FeaturedActivities"

import Cors from 'cors'
import initMiddleware from '../../lib/init-middleware'

// Initialize the cors middleware
const cors = initMiddleware(
  // You can read more about the available options here: https://github.com/expressjs/cors#configuration-options
  Cors({
    // Only allow requests with GET, POST and OPTIONS
    methods: ['GET', 'POST', 'OPTIONS'],
  })
)

export default async function handler(req, res) {
  // Run cors
  await cors(req, res)

  const html = ReactDOMServer.renderToStaticMarkup(<FeaturedActivities />);
  res.status(200).end(`<script src="https://cdn.tailwindcss.com"></script>${html}`)
}
