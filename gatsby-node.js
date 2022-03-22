exports.onPreBuild = ({ actions }) => {
  const { createRedirect } = actions

  createRedirect({
    fromPath: `/en/blog/*`,
    toPath: `/blog/*`,
    force: true,
  })
}
