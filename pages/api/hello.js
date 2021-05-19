// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
  res.status(200).json({ secret: process.env.SECRET, open: process.env.NEXT_PUBLIC_OPEN })
}
