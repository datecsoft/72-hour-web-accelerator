Import-Module WebAdministration

$siteName = "MarketingSite"
$physicalPath = "c:\inetpub\wwwroot\marketingdatecsoft\dist"
$hostName = "marketing.datecsoft.com"
$port = 80

# Check if site exists
if (Get-Website | Where-Object { $_.Name -eq $siteName }) {
    Write-Host "Site '$siteName' exists. Stopping and removing..."
    Stop-Website -Name $siteName
    Remove-Website -Name $siteName
}

# Create new site
Write-Host "Creating site '$siteName'..."
New-Website -Name $siteName -PhysicalPath $physicalPath -Port $port -HostHeader $hostName

# Verify
$site = Get-Website | Where-Object { $_.Name -eq $siteName }
if ($site) {
    Write-Host "Site '$siteName' created successfully."
    Write-Host "State: $($site.State)"
    Write-Host "PhysicalPath: $physicalPath"
    Write-Host "Binding: http://$($hostName):$($port)"
} else {
    Write-Error "Failed to create site."
}
