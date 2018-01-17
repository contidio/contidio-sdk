using System;
using com.contidio.sdk.proto;
using Contidio.Sdk.Exceptions;
using Contidio.Sdk.Constants;

namespace Contidio.Sdk.Helpers.Files
{
    public class FileMimeType
    {
        // Contidio supported MIME types
        // We have all official HTML5 image/video/audio formats + Webp + Webm + TIFF

        public static readonly FileMimeType[] FILE_MIME_TYPES = new FileMimeType[]
        {
            // see http://www.w3schools.com/html/html_images.asp

            new FileMimeType(SdkConstants.MIME_TYPE_IMAGE_JPG, BinaryType.IMAGE, "jpg"),
            new FileMimeType(SdkConstants.MIME_TYPE_IMAGE_GIF, BinaryType.IMAGE, "gif"),
            new FileMimeType(SdkConstants.MIME_TYPE_IMAGE_PNG, BinaryType.IMAGE, "png"),

            // Google proprietary format

            new FileMimeType(SdkConstants.MIME_TYPE_IMAGE_WEBP, BinaryType.IMAGE, "webp"),

            // common for raw input

            new FileMimeType(SdkConstants.MIME_TYPE_IMAGE_TIFF, BinaryType.IMAGE, "tiff"),    
                    
            // see http://www.w3schools.com/html/html5_video.asp

            new FileMimeType(SdkConstants.MIME_TYPE_VIDEO_MP4, BinaryType.VIDEO, "mp4"),
            new FileMimeType(SdkConstants.MIME_TYPE_VIDEO_WEBM, BinaryType.VIDEO, "webm"),
            new FileMimeType(SdkConstants.MIME_TYPE_VIDEO_OGG, BinaryType.VIDEO, "ogg"),

            // new formats from https://docs.microsoft.com/en-us/azure/media-services/media-services-media-encoder-standard-formats

            new FileMimeType(SdkConstants.MIME_TYPE_VIDEO_MKV, BinaryType.VIDEO, "mkv"),
            new FileMimeType(SdkConstants.MIME_TYPE_VIDEO_MOV, BinaryType.VIDEO, "mov"),
            new FileMimeType(SdkConstants.MIME_TYPE_VIDEO_3GPP, BinaryType.VIDEO, "3gpp"),
            new FileMimeType(SdkConstants.MIME_TYPE_VIDEO_WMV, BinaryType.VIDEO, "wmv"),

            // see http://www.w3schools.com/html/html5_audio.asp

            new FileMimeType(SdkConstants.MIME_TYPE_AUDIO_M4A, BinaryType.AUDIO, "m4a"),
            new FileMimeType(SdkConstants.MIME_TYPE_AUDIO_XM4A, BinaryType.AUDIO, "m4a"),
            new FileMimeType(SdkConstants.MIME_TYPE_AUDIO_MP3, BinaryType.AUDIO, "mp3"),
            new FileMimeType(SdkConstants.MIME_TYPE_AUDIO_MP4, BinaryType.AUDIO, "mp4"),
            new FileMimeType(SdkConstants.MIME_TYPE_AUDIO_MPEG, BinaryType.AUDIO, "mpeg"),            
            new FileMimeType(SdkConstants.MIME_TYPE_AUDIO_OGG, BinaryType.AUDIO, "ogg"),
            new FileMimeType(SdkConstants.MIME_TYPE_AUDIO_WAV, BinaryType.AUDIO, "wav"),            

            // https://developer.mozilla.org/en-US/docs/Web/HTML/Supported_media_formats

            new FileMimeType(SdkConstants.MIME_TYPE_AUDIO_WEBM, BinaryType.AUDIO, "webm"),

            // new formats from https://docs.microsoft.com/en-us/azure/media-services/media-services-media-encoder-standard-formats

            new FileMimeType(SdkConstants.MIME_TYPE_AUDIO_WMA, BinaryType.AUDIO, "wma"),

            // 

            new FileMimeType(SdkConstants.MIME_TYPE_DOCUMENT_PDF, BinaryType.DOCUMENT, "pdf"),
            new FileMimeType(SdkConstants.MIME_TYPE_DOCUMENT_HTML, BinaryType.DOCUMENT, "html"),
            new FileMimeType(SdkConstants.MIME_TYPE_DOCUMENT_TXT_PLAIN, BinaryType.DOCUMENT, "txt")
        };

        public static readonly FileMimeType[] FILE_MIME_TYPES_ECP_ONLY = new FileMimeType[]
        {
            new FileMimeType(SdkConstants.MIME_TYPE_IMAGE_EPS, BinaryType.IMAGE, "eps"),
            new FileMimeType(SdkConstants.MIME_TYPE_IMAGE_SVG, BinaryType.IMAGE, "svg"),
            new FileMimeType(SdkConstants.MIME_TYPE_IMAGE_APPLICATION_ILLUSTRATOR, BinaryType.IMAGE, "ai")
        };

        public static string[] GetMimeTypes(bool includeEcp)
        {
            string[] mimeTypes;

            if (!includeEcp)
            {
                mimeTypes = new string[FileMimeType.FILE_MIME_TYPES.Length];

                for (int i = 0; i < FILE_MIME_TYPES.Length; i++)
                {
                    mimeTypes[i] = FILE_MIME_TYPES[i].MimeType;
                }
            } else
            {
                mimeTypes = new string[FileMimeType.FILE_MIME_TYPES.Length +
                    FileMimeType.FILE_MIME_TYPES_ECP_ONLY.Length];

                int target = 0;

                for (int i = 0; i < FILE_MIME_TYPES.Length; i++)
                {
                    mimeTypes[target] = FILE_MIME_TYPES[i].MimeType;
                    target++;
                }

                for (int i = 0; i < FILE_MIME_TYPES_ECP_ONLY.Length; i++)
                {
                    mimeTypes[target] = FILE_MIME_TYPES_ECP_ONLY[i].MimeType;
                    target++;
                }
            }

            return mimeTypes;
        }

        public static FileMimeType GetFileMimeType(string mimeType, bool includeEcp)
        {            
            foreach (FileMimeType availableFileMimeType in FileMimeType.FILE_MIME_TYPES)
            {
                if (string.Equals(availableFileMimeType.MimeType, mimeType, StringComparison.InvariantCultureIgnoreCase))
                {
                    return availableFileMimeType;
                }
            }

            if (includeEcp)
            {
                foreach (FileMimeType availableFileMimeType in FileMimeType.FILE_MIME_TYPES_ECP_ONLY)
                {
                    if (string.Equals(availableFileMimeType.MimeType, mimeType, StringComparison.InvariantCultureIgnoreCase))
                    {
                        return availableFileMimeType;
                    }
                }
            }

            throw new InvalidOperationBackendException(BackendErrorCode.BINARY_MIME_TYPE_INVALID,
                "This mime type is not supported");
        }

        public static bool IsVectorContentType(String mimeType)
        {
            if (string.IsNullOrEmpty(mimeType))
                return false;

            return (string.Equals(mimeType, SdkConstants.MIME_TYPE_IMAGE_EPS, StringComparison.InvariantCultureIgnoreCase) ||
                string.Equals(mimeType, SdkConstants.MIME_TYPE_IMAGE_SVG, StringComparison.InvariantCultureIgnoreCase) ||
                string.Equals(mimeType, SdkConstants.MIME_TYPE_IMAGE_APPLICATION_ILLUSTRATOR, StringComparison.InvariantCultureIgnoreCase));            
        }

        public string MimeType { get; private set; }
        public BinaryType BinaryType { get; private set; }
        public string Extension { get; private set; }

        public FileMimeType(string mimeType, BinaryType binaryType, string extension)
        {
            MimeType = mimeType;
            BinaryType = binaryType;
            Extension = extension;
        }        
    }
}
