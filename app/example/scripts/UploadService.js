angular
    .module('example')
    .service('s3Uploader', function($q) {

        this.upload = function(imageURI, fileName) {
            var s3URI = encodeURI("https://socialimagebucket.s3.amazonaws.com/"),
                policyBase64 = "eyJleHBpcmF0aW9uIjoiMjAyMC0xMi0zMVQxMjowMDowMC4wMDBaIiwiY29uZGl0aW9ucyI6W3siYnVja2V0Ijoic29jaWFsaW1hZ2VidWNrZXQifSxbInN0YXJ0cy13aXRoIiwiJGtleSIsIiJdLHsiYWNsIjoicHVibGljLXJlYWQifSxbInN0YXJ0cy13aXRoIiwiJENvbnRlbnQtVHlwZSIsIiJdLFsiY29udGVudC1sZW5ndGgtcmFuZ2UiLDAsNTI0Mjg4MDAwXV19",
                signature = "fQJN22T4lmLSw+TsTA2YqI7j0gU=",
                awsKey = 'AKIAJX7IORIQPVB2QK5A',
                acl = "public-read";

            var deferred = $q.defer(),
                ft = new FileTransfer(),
                options = new FileUploadOptions();

            options.fileKey = "file";
            options.fileName = fileName;
            options.mimeType = "image/jpeg";
            options.chunkedMode = false;
            options.params = {
                "key": fileName,
                "AWSAccessKeyId": awsKey,
                "acl": acl,
                "policy": policyBase64,
                "signature": signature,
                "Content-Type": "image/jpeg"
            };

            ft.upload(imageURI, s3URI,
                function(e) {
                    deferred.resolve(e);
                },
                function(e) {
                    deferred.reject(e);
                }, options);

            return deferred.promise;

        }

    });