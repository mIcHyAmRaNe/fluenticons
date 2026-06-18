export const downloadAsZip = async (filesArray, zipFileName = 'fluenticons') => {
  const { default: JSZip } = await import('jszip')
  const zip = new JSZip()
  filesArray.forEach(file => {
    zip.file(file.name, file.content)
  })
  const blob = await zip.generateAsync({ type: 'blob' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = zipFileName + '.zip'
  a.click()
  URL.revokeObjectURL(url)
}
