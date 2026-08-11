param(
  [string]$OutputPath = "assets\og-eliseu-operacoes-simples.png",
  [string]$PreviewPath = "qa\og-whatsapp-preview.png"
)

$ErrorActionPreference = "Stop"

Add-Type -AssemblyName System.Drawing

$projectRoot = Split-Path -Parent $PSScriptRoot
$logoPath = Join-Path $projectRoot "assets\logo-eliseu.png"
$resolvedOutput = Join-Path $projectRoot $OutputPath
$resolvedPreview = Join-Path $projectRoot $PreviewPath

$canvasWidth = 1200
$canvasHeight = 630
$logoWidth = 560

$canvas = New-Object System.Drawing.Bitmap($canvasWidth, $canvasHeight)
$canvas.SetResolution(96, 96)
$graphics = [System.Drawing.Graphics]::FromImage($canvas)
$logo = [System.Drawing.Image]::FromFile($logoPath)

try {
  $graphics.Clear([System.Drawing.ColorTranslator]::FromHtml("#FAFBFC"))
  $graphics.CompositingMode = [System.Drawing.Drawing2D.CompositingMode]::SourceOver
  $graphics.CompositingQuality = [System.Drawing.Drawing2D.CompositingQuality]::HighQuality
  $graphics.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
  $graphics.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
  $graphics.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality

  $logoHeight = [int][Math]::Round($logoWidth * $logo.Height / $logo.Width)
  $logoX = [int][Math]::Round(($canvasWidth - $logoWidth) / 2)
  $logoY = [int][Math]::Round(($canvasHeight - $logoHeight) / 2)
  $destination = New-Object System.Drawing.Rectangle($logoX, $logoY, $logoWidth, $logoHeight)
  $graphics.DrawImage($logo, $destination)

  $canvas.Save($resolvedOutput, [System.Drawing.Imaging.ImageFormat]::Png)
}
finally {
  $logo.Dispose()
  $graphics.Dispose()
  $canvas.Dispose()
}

$source = [System.Drawing.Image]::FromFile($resolvedOutput)
$preview = New-Object System.Drawing.Bitmap(100, 100)
$preview.SetResolution(96, 96)
$previewGraphics = [System.Drawing.Graphics]::FromImage($preview)

try {
  $previewGraphics.Clear([System.Drawing.Color]::White)
  $previewGraphics.CompositingQuality = [System.Drawing.Drawing2D.CompositingQuality]::HighQuality
  $previewGraphics.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
  $previewGraphics.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality

  $squareSize = $source.Height
  $sourceX = [int][Math]::Round(($source.Width - $squareSize) / 2)
  $sourceRect = New-Object System.Drawing.Rectangle($sourceX, 0, $squareSize, $squareSize)
  $previewRect = New-Object System.Drawing.Rectangle(0, 0, 100, 100)
  $previewGraphics.DrawImage($source, $previewRect, $sourceRect, [System.Drawing.GraphicsUnit]::Pixel)
  $preview.Save($resolvedPreview, [System.Drawing.Imaging.ImageFormat]::Png)
}
finally {
  $previewGraphics.Dispose()
  $preview.Dispose()
  $source.Dispose()
}

Write-Output "Created $resolvedOutput"
Write-Output "Created $resolvedPreview"
