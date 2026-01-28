# ${{ values.name }} Terraform Module
# ${{ values.description }}

terraform {
  required_version = ">= ${{ values.terraform_version }}"
  
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }
}

# TODO: Add your ${{ values.aws_resource }} configuration here
resource "aws_example" "main" {
  # Configure your resource
}
