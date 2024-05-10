terraform {
 backend "gcs" {
    bucket = "cs-ew1-amazon-tracker-264915-github-gcf"
    prefix = "terraform/bq/state"
 }
}
