gcloud iam service-accounts add-iam-policy-binding sportapp-gke-sa@sportapp-miso-grupo6.iam.gserviceaccount.com \
    --role roles/iam.workloadIdentityUser \
    --member "serviceAccount:sportapp-miso-grupo6.svc.id.goog[development/ksa-dev-sportapp]"