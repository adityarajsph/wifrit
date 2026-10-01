Add-Type -AssemblyName System.Drawing

function Resize-Image {
    param (
        [string]$InputPath,
        [string]$OutputPath,
        [int]$TargetWidth
    )

    $src = [System.Drawing.Bitmap]::FromFile($InputPath)
    $origWidth = $src.Width
    $origHeight = $src.Height
    Write-Host "Original $InputPath : $origWidth x $origHeight"

    # Calculate proportional height
    $targetHeight = [int][Math]::Round(($origHeight / $origWidth) * $TargetWidth)

    $dest = New-Object System.Drawing.Bitmap($TargetWidth, $targetHeight, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
    $graphics = [System.Drawing.Graphics]::FromImage($dest)
    $graphics.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $graphics.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
    $graphics.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
    $graphics.CompositingQuality = [System.Drawing.Drawing2D.CompositingQuality]::HighQuality
    $graphics.Clear([System.Drawing.Color]::Transparent)

    $graphics.DrawImage($src, 0, 0, $TargetWidth, $targetHeight)

    $graphics.Dispose()
    $src.Dispose()

    # Save to temporary path first if same path
    $tempOut = "$OutputPath.tmp.png"
    $dest.Save($tempOut, [System.Drawing.Imaging.ImageFormat]::Png)
    $dest.Dispose()

    Move-Item -Path $tempOut -Destination $OutputPath -Force
    $size = (Get-Item $OutputPath).Length
    Write-Host "Resized $OutputPath : $TargetWidth x $targetHeight ($size bytes)"
}

Resize-Image -InputPath "$PSScriptRoot\..\public\wifrit_black.png" -OutputPath "$PSScriptRoot\..\public\wifrit_black.png" -TargetWidth 1200
Resize-Image -InputPath "$PSScriptRoot\..\public\wifrit_white.png" -OutputPath "$PSScriptRoot\..\public\wifrit_white.png" -TargetWidth 1200
