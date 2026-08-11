param(
  [string]$OutputPath = "assets\og-eliseu-menos-improviso-mais-sistema.png",
  [string]$PreviewPath = "qa\og-whatsapp-preview.png"
)

$ErrorActionPreference = "Stop"

Add-Type -AssemblyName System.Drawing

$projectRoot = Split-Path -Parent $PSScriptRoot
$iconPath = Join-Path $projectRoot "assets\hero-terminal-core.png"
$resolvedOutput = Join-Path $projectRoot $OutputPath
$resolvedPreview = Join-Path $projectRoot $PreviewPath

$canvasWidth = 1200
$canvasHeight = 630

$canvas = New-Object System.Drawing.Bitmap($canvasWidth, $canvasHeight)
$canvas.SetResolution(96, 96)
$graphics = [System.Drawing.Graphics]::FromImage($canvas)
$icon = [System.Drawing.Image]::FromFile($iconPath)
$backgroundBrush = New-Object System.Drawing.Drawing2D.LinearGradientBrush(
  (New-Object System.Drawing.Point(0, 0)),
  (New-Object System.Drawing.Point($canvasWidth, $canvasHeight)),
  [System.Drawing.ColorTranslator]::FromHtml("#061020"),
  [System.Drawing.ColorTranslator]::FromHtml("#020711")
)
$inputBrush = New-Object System.Drawing.Drawing2D.LinearGradientBrush(
  (New-Object System.Drawing.Point(20, 0)),
  (New-Object System.Drawing.Point(660, 0)),
  [System.Drawing.Color]::FromArgb(35, 88, 166, 255),
  [System.Drawing.Color]::FromArgb(255, 55, 133, 255)
)
$outputBrush = New-Object System.Drawing.Drawing2D.LinearGradientBrush(
  (New-Object System.Drawing.Point(900, 0)),
  (New-Object System.Drawing.Point(1170, 0)),
  [System.Drawing.ColorTranslator]::FromHtml("#3785FF"),
  [System.Drawing.ColorTranslator]::FromHtml("#29E889")
)
$inputGlowPen = New-Object System.Drawing.Pen([System.Drawing.Color]::FromArgb(60, 47, 129, 247), 12)
$inputPen = New-Object System.Drawing.Pen($inputBrush, 4)
$outputGlowPen = New-Object System.Drawing.Pen([System.Drawing.Color]::FromArgb(65, 47, 129, 247), 13)
$outputPen = New-Object System.Drawing.Pen($outputBrush, 4)
$textFont = New-Object System.Drawing.Font("Segoe UI Semibold", 56, [System.Drawing.FontStyle]::Regular, [System.Drawing.GraphicsUnit]::Pixel)
$textFormat = [System.Drawing.StringFormat]::GenericTypographic
$shadowBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(35, 8, 67, 180))
$whiteTextBrush = New-Object System.Drawing.SolidBrush([System.Drawing.ColorTranslator]::FromHtml("#F6F8FA"))
$blueTextBrush = New-Object System.Drawing.SolidBrush([System.Drawing.ColorTranslator]::FromHtml("#3785FF"))
$greenBrush = New-Object System.Drawing.SolidBrush([System.Drawing.ColorTranslator]::FromHtml("#29E889"))
$paths = @()

try {
  $graphics.FillRectangle($backgroundBrush, 0, 0, $canvasWidth, $canvasHeight)
  $graphics.CompositingMode = [System.Drawing.Drawing2D.CompositingMode]::SourceOver
  $graphics.CompositingQuality = [System.Drawing.Drawing2D.CompositingQuality]::HighQuality
  $graphics.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
  $graphics.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
  $graphics.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
  $graphics.TextRenderingHint = [System.Drawing.Text.TextRenderingHint]::AntiAliasGridFit

  $inputGlowPen.StartCap = [System.Drawing.Drawing2D.LineCap]::Round
  $inputGlowPen.EndCap = [System.Drawing.Drawing2D.LineCap]::Round
  $inputPen.StartCap = [System.Drawing.Drawing2D.LineCap]::Round
  $inputPen.EndCap = [System.Drawing.Drawing2D.LineCap]::Round
  $outputGlowPen.StartCap = [System.Drawing.Drawing2D.LineCap]::Round
  $outputGlowPen.EndCap = [System.Drawing.Drawing2D.LineCap]::Round
  $outputPen.StartCap = [System.Drawing.Drawing2D.LineCap]::Round
  $outputPen.EndCap = [System.Drawing.Drawing2D.LineCap]::Round

  $topPath = New-Object System.Drawing.Drawing2D.GraphicsPath
  $topPath.AddBezier(28, 410, 230, 400, 500, 375, 670, 305)
  $middlePath = New-Object System.Drawing.Drawing2D.GraphicsPath
  $middlePath.AddBezier(28, 475, 250, 470, 505, 420, 670, 316)
  $bottomPath = New-Object System.Drawing.Drawing2D.GraphicsPath
  $bottomPath.AddBezier(28, 540, 260, 535, 510, 465, 670, 327)
  $paths += $topPath, $middlePath, $bottomPath

  foreach ($path in $paths) {
    $graphics.DrawPath($inputGlowPen, $path)
    $graphics.DrawPath($inputPen, $path)
  }

  $graphics.DrawLine($outputGlowPen, 905, 316, 1170, 316)
  $graphics.DrawLine($outputPen, 905, 316, 1170, 316)
  $graphics.FillEllipse($greenBrush, 1162, 308, 16, 16)

  $graphics.DrawString("menos", $textFont, $whiteTextBrush, 300, 88, $textFormat)
  $graphics.DrawString("improviso.", $textFont, $whiteTextBrush, 300, 154, $textFormat)
  $graphics.DrawString("mais sistema.", $textFont, $blueTextBrush, 300, 230, $textFormat)

  $graphics.FillEllipse($shadowBrush, 630, 445, 310, 34)
  $sourceRect = New-Object System.Drawing.Rectangle(235, 188, 790, 850)
  $iconRect = New-Object System.Drawing.Rectangle(665, 170, 255, 275)
  $graphics.DrawImage($icon, $iconRect, $sourceRect, [System.Drawing.GraphicsUnit]::Pixel)

  $canvas.Save($resolvedOutput, [System.Drawing.Imaging.ImageFormat]::Png)
}
finally {
  foreach ($path in $paths) { $path.Dispose() }
  $greenBrush.Dispose()
  $blueTextBrush.Dispose()
  $whiteTextBrush.Dispose()
  $shadowBrush.Dispose()
  $textFont.Dispose()
  $outputPen.Dispose()
  $outputGlowPen.Dispose()
  $inputPen.Dispose()
  $inputGlowPen.Dispose()
  $outputBrush.Dispose()
  $inputBrush.Dispose()
  $backgroundBrush.Dispose()
  $icon.Dispose()
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
