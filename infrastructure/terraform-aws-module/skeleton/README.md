# ${{ values.name }}

${{ values.description }}

## Usage
```hcl
module "${{ values.name }}" {
  source = "github.com/${{ values.destination.owner }}/${{ values.destination.repo }}"
  
  environment  = "production"
  project_name = "my-project"
}
```

## Requirements

- Terraform >= ${{ values.terraform_version }}
- AWS Provider ~> 5.0

## Resources Created

- ${{ values.aws_resource }}

## Inputs

| Name | Description | Type | Default | Required |
|------|-------------|------|---------|:--------:|
| environment | Environment name | `string` | n/a | yes |
| project_name | Project name | `string` | `"${{ values.name }}"` | no |

## Outputs

| Name | Description |
|------|-------------|
| resource_id | ID of the created resource |
